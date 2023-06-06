import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
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
    setListImages: (payload) =>
      dispatch({
        type: typeReducer.listImages,
        payload,
      }),
    setLanguage: (payload) =>
      dispatch({
        type: typeReducer.lang,
        payload,
      }),
    setTheme: (payload) =>
      dispatch({
        type: typeReducer.theme,
        payload,
      }),
    setAuth: (payload) =>
      dispatch({
        type: typeReducer.authInfo,
        payload,
      }),
  };
};

const HomeScreen = (props) => {
  const {
    auth,
    languages,
    setStatusNoti,
    setLanguage,
    setAuth,
    setLoader,
    setTheme,
    setListImages,
  } = props;
  const navigation = useNavigation();
  useEffect(() => {
    if (auth && auth?.token === null) {
      navigation.navigate("Welcome");
    }
  }, [auth]);

  const logoutHandle = () => {
    AsyncStorage.removeItem("IMAtoken");
    AsyncStorage.removeItem("permission");
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("type");
    AsyncStorage.removeItem("id");
    AsyncStorage.removeItem("loginName");
    AsyncStorage.removeItem("displayName");
    AsyncStorage.removeItem("quota");
    AsyncStorage.setItem("MYMY_previous_theme", JSON.stringify("light"));
    AsyncStorage.removeItem("MYMY_theme");
    setTheme("light");
    setListImages({
      data: [],
      sortedList: [],
      items: {},
      pages: {},
    });
    setAuth(null);
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView>
      <>
        <Text>Welcome back</Text>
        <Button title="Logout" onPress={logoutHandle} />
      </>
    </SafeAreaView>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
