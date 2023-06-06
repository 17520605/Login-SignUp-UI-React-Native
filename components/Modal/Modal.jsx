import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Modal = (props) => {
  const {
    active,
    setActive,
    title,
    controller,
    small,
    disableBackgroundClose = true,
    styleFullscreen = false,
  } = props;

  const handleBackgroundClick = () => {
    if (!disableBackgroundClose) {
      setActive(false);
    }
  };

  return (
    <View style={styles.wrapModalLayout}>
      <View
        style={[
          styles.wrapModal,
          small ? styles.small : styles.normal,
          active && styles.active,
          styleFullscreen && styles.fullscreen,
        ]}
      >
        <View style={styles.background} onTouchEnd={handleBackgroundClick} />
        <View style={styles.modalContent}>
          <View style={styles.headerModal}>
            <View style={styles.modalTitleContainer}>
              {styleFullscreen && (
                <TouchableOpacity onPress={() => setActive(false)}>
                  <Text style={styles.backMovePopup}>{"<"}</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.modalTitle}>{title}</Text>
            </View>
            <View style={styles.modalHeaderRight}>
              <View style={styles.extraHeader}>{props.extraHeader}</View>
              {!styleFullscreen && (
                <TouchableOpacity
                  onPress={() => setActive(false)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeIcon}>X</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.bodyModal}>{props.children}</View>
          <View style={styles.footerModal}>
            <View style={styles.extraFooter}>{props.extraFooter}</View>
            <View style={styles.modalFooter}>
              {controller
                ? controller.map((data, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.button,
                          data.disabled && styles.disabledButton,
                          data.important && styles.importantButton,
                        ]}
                        onPress={!data.disabled ? data.action : (f) => f}
                      >
                        <Text style={styles.buttonText}>{data.name}</Text>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapModalLayout: { position: "relative" },
  wrapModal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  small: { width: "40%" },
  normal: { width: "60%", height: "70%" },
  active: { display: "flex" },
  fullscreen: { width: "100%", height: "100%" },
  background: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContent: {
    position: "relative",
    backgroundColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 0,
  },
  modalTitleContainer: { flexDirection: "row", alignItems: "center" },
  backMovePopup: { color: "white", marginRight: 10, fontSize: 20 },
  modalTitle: { color: "white", fontSize: 18 },
  modalHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeButton: { padding: 10 },
  closeIcon: { color: "white", fontSize: 20 },
  extraHeader: { marginRight: 10 },
  bodyModal: { padding: 10, paddingTop: 0, marginBottom: 50 },
  footerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  extraFooter: {},
  modalFooter: {},
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  importantButton: {
    backgroundColor: "red",
  },
  buttonText: { color: "white", fontSize: 16 },
});

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    languages: state.languages,
  };
};

export default connect(mapStateToProps)(Modal);
