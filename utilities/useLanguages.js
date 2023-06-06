import React, { useEffect, useRef } from "react";
import { Text } from "react-native";

export const renderText = (text, value) => {
  return text.replace(/{value}/gi, value);
};

export const RenderTextWithLine = (props) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof props.text === "string" && props.text.length > 0) {
      let result = props.text.replace(/(?:\r\n|\r|\n)/g, "\n");
      result = result.replaceAll(
        "{value}",
        `<Text style={styles.value}>${props.value}</Text>`
      );
      textRef.current.setNativeProps({ text: result });
    }
  }, [props.text, props.value]);

  return (
    <Text ref={textRef} style={[props.style, styles.container]}>
      {props.text}
    </Text>
  );
};

export const renderElement = (text, value) => {
  let result = text.split("{value}");

  return result.map((e, i) => {
    return (
      <React.Fragment key={i}>
        {e}
        {i !== result.length - 1 && <Text style={styles.value}>{value}</Text>}
      </React.Fragment>
    );
  });
};

const styles = {
  container: {
    flexWrap: "wrap",
  },
  value: {
    fontWeight: "bold",
  },
};
