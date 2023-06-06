import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { validateLength } from "../utilities/common";
import ProfileService from "../hook/profileService";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { typeReducer } from "../utilities/constants";
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    languages: state.languages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setStatusNoti: (payload) =>
      dispatch({
        type: typeReducer.statusNoti,
        payload,
      }),
    setLoader: (payload) =>
      dispatch({
        type: typeReducer.loader,
        payload,
      }),
    setAppName: (payload) =>
      dispatch({
        type: typeReducer.appInfo_appName,
        payload,
      }),
    setLanguage: (payload) =>
      dispatch({
        type: typeReducer.lang,
        payload,
      }),
    setMenuOptionMobile: (payload) =>
      dispatch({
        type: typeReducer.menuOptionMobile,
        payload,
      }),
    setAuth: (payload) =>
      dispatch({
        type: typeReducer.authInfo,
        payload,
      }),
  };
};

const LoginScreen = (props) => {
  const { auth, languages, setStatusNoti, setLanguage, setAuth, setLoader } =
    props;

  const renderLanguage = () => {
    const locale = languages.language_code;
    if (!locale) return "English";
    switch (locale) {
      case "en":
        return "English";
      case "ko":
        return "한국어";
      default:
        return;
    }
  };

  const navigation = useNavigation();
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  console.log(auth);
  useEffect(() => {
    if (auth && auth?.token !== null) {
      navigation.navigate("Home");
    }
  }, [auth]);

  const handleLogin = () => {
    let errors = {};
    if (validateLength(email, 1, 999) === "incorrect") {
      errors["id"] = languages.landing.empty_id; //
    }

    if (validateLength(password, 1, 999) === "incorrect") {
      errors["password"] = languages.landing.empty_password;
    }
    const data = {
      loginName: email,
      password: password,
    };

    ProfileService.login(data)
      .then((json) => {
        if (json.error === "unactivated_user") {
          setStatusNoti({
            active: true,
            title: languages.alert.alert,
            content: languages.alert.unactivated_user,
          });
          return;
        }

        if (json.error === "wrong_user") {
          setStatusNoti({
            type: "wrong_user",
            active: true,
            title: languages.alert.notice,
            content: languages.alert.login_non_exist_email,
            styles: {
              top: "50%",
              transform: "translateY(-50%)",
            },
          });

          // errors['email'] = languages.alert.login_1;
          // setError(errors);
          return;
        }
        if (json.error === "wrong_password") {
          setInfoLogin({ ...infoLogin, password: "" });
          setDisableEnter(true);
          setStatusNoti({
            active: true,
            title: languages.alert.login_error,
            visibleClose: true,
            btnText: languages.alert.confirm,
            styles: {
              top: "50%",
              transform: "translateY(-50%)",
            },
            callback: () => {
              // setInfoLogin({ ...infoLogin, password: "" });
              if (passwordInputRef && passwordInputRef.current)
                passwordInputRef.current.focus();
              setDisableEnter(false);
            },
          });
          return;
        }
        if (json.error === "wrong_password_many_times") {
          setStatusNoti({
            active: true,
            title: languages.alert.notice,
            visibleClose: true,
            btnText: languages.alert.confirm,
            callback: () => {
              // setInfoLogin({ ...infoLogin, password: "" });
              if (passwordInputRef && passwordInputRef.current)
                passwordInputRef.current.focus();
              setDisableEnter(false);
            },
          });
          return;
        }
        if (json.error === "unverified_email") {
          setVerifyModal({
            active: true,
            text: languages.landing.account_verify_text_2,
          });
          return;
        }
        if (json.data) {
          if (json.result === "ok") {
            console.log(json.data);
            AsyncStorage.setItem("IMAtoken", JSON.stringify(json.data.token));
            AsyncStorage.setItem(
              "permission",
              JSON.stringify(json.data.permission)
            );
            AsyncStorage.setItem("email", JSON.stringify(json.data.email));
            AsyncStorage.setItem("type", JSON.stringify(json.data.type));
            AsyncStorage.setItem("id", JSON.stringify(json.data.id));
            AsyncStorage.setItem(
              "loginName",
              JSON.stringify(json.data.loginName)
            );
            AsyncStorage.setItem("quota", JSON.stringify(json.data.quota));
            AsyncStorage.setItem(
              "displayName",
              JSON.stringify(json.data.displayName)
            );
            AsyncStorage.setItem(
              "language",
              JSON.stringify(json.data.language)
            );
            setAuth(json.data);
            if (json.message === "password_overtime") {
              console.log("password_overtime");
              navigation.navigate("Home");
            } else {
              console.log("ok go to archive");
              navigation.navigate("Home");
            }
          } else {
            setAlertModal({
              active: true,
              title: languages.landing.notice,
              text: languages.alert.login_wrong_password, // after CBT will replace
              controller: [
                {
                  name: languages.general.ok,
                  action: () => {
                    closeAlertModal();
                    setInfoLogin({ ...infoLogin, password: "" });
                    if (passwordInputRef && passwordInputRef.current)
                      passwordInputRef.current.focus();
                  },
                  important: true,
                },
              ],
            });
            return;
          }
        } else {
          setStatusNoti({
            active: true,
            title: languages.alert.error,
            content: languages.alert.login_2,
          });
        }
      })
      .catch((error) => console.log("catch", error));
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl flex-1"
              secureTextEntry={!showPassword}
              placeholder="password"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              className="absolute right-2"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={{ paddingHorizontal: 10 }}>
                {showPassword ? (
                  <Feather name="eye-off" size={24} />
                ) : (
                  <Feather name="eye" size={24} />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => handleLogin()}
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text>{renderLanguage()}</Text>
      </View>
    </View>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
