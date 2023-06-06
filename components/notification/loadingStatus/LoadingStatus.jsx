import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  IconClose,
  IconDown,
  IconError,
  IconFolderLocation,
  IconImage,
  IconSuccess,
  IconVideo,
} from "../icons";
import {
  bytesToSize,
  detectFileType,
  renderIconDocument,
} from "../../utils/fileUtils";
import {
  sendFileUpload,
  stopAllUpload,
} from "../../redux/actions/uploadAction";
import TooltipV3 from "../tooltip/TooltipV3";
import Loader from "../loader/Loader";

const mapStateToProps = (state) => {
  return {
    uploadProgress: state.uploadReducer.uploadProgress,
    languages: state.languagesReducer.languages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stopAllUpload: () => dispatch(stopAllUpload()),
  };
};

const LoadingStatus = ({ uploadProgress, languages, stopAllUpload }) => {
  const [activeList, setActiveList] = useState(false);
  const [resumeListFiles, setResumeListFiles] = useState(null);
  const listContainerRef = useRef();
  const listFileRef = useRef();
  const resizeBar = useRef();

  const countTotalUpload = () => {
    return uploadProgress.list.length;
  };

  const countSuccess = () => {
    return uploadProgress.list.filter((file) => file.status === "success")
      .length;
  };

  const countTotalSize = () => {
    let size = 0;
    uploadProgress.list.forEach((file) => {
      size += file.size;
    });
    return size;
  };

  const checkProgressStatus = () => {
    if (
      uploadProgress.status === "failed" ||
      uploadProgress.status === "complete"
    )
      return "complete";
    if (uploadProgress.status === "creating_folder") return "creating_folder";
    return "uploading";
  };

  const renderTitle = () => {
    switch (uploadProgress.status) {
      case "processing":
        return languages.imageLayout.uploading;
      case "finished":
        return languages.imageLayout.completed;
      case "failed":
        return languages.imageLayout.failed_upload;
      default:
        break;
    }
  };

  const closeProgress = () => {
    stopAllUpload();
  };

  const actionHandle = (file, index) => {
    if (file.status === "success") {
      // open folder location
    } else {
      global.variables.uploadData.files.splice(index, 1);
      setResumeListFiles(
        global.variables.uploadData.files.slice(uploadProgress.list.length - 1)
      );
      global.variables.uploadData.files =
        global.variables.uploadData.files.slice(0, uploadProgress.list.length);
      sendFileUpload(null, resumeListFiles, (f) => f);
    }
  };

  const stopProgress = () => {
    setResumeListFiles(
      global.variables.uploadData.files.slice(uploadProgress.list.length - 1)
    );
    global.variables.uploadData.files = global.variables.uploadData.files.slice(
      0,
      uploadProgress.list.length
    );
    global.variables.xhrUpload.abort();
  };

  const restartProgress = () => {
    sendFileUpload(null, resumeListFiles, (f) => f);
    setResumeListFiles(null); // reset
  };

  const renderControllButton = () => {
    if (
      uploadProgress.status == null ||
      uploadProgress.status === "creating_folder"
    )
      return;
    if (uploadProgress.status === "finished") {
      if (resumeListFiles && resumeListFiles.length > 0) {
        // user stop the progress
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ padding: 5 }}
            onPress={restartProgress}
          >
            <Text style={{ color: "#00A7CF" }}>
              {languages.imageLayout.resume_upload}
            </Text>
          </TouchableOpacity>
        );
      }
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ padding: 5 }}
          onPress={stopProgress}
        >
          <Text style={{ color: "#FF0000" }}>
            {languages.imageLayout.stop_upload}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const closeProgressUpload = () => {
    document.getElementById("restartProgress").click();
    closeAlertModal();
  };

  const closePopupUpload = () => {
    closeAlertModal();
    closeProgress();
  };

  const closeNotice = () => {
    stopProgress();
    setAlertModal({
      active: true,
      title: languages.imageLayout.title_alert,
      text: languages.imageLayout.content_notice,
      controller: [
        {
          name: languages.imageLayout.cancel_upload,
          action: () => {
            closeAlertModal();
          },
        },
        {
          name: languages.imageLayout.continue_upload,
          action: () => {
            restartProgress();
            closeAlertModal();
          },
        },
      ],
    });
  };

  const renderAlertNotice = () => {
    if (
      uploadProgress.status !== "creating_folder" &&
      uploadProgress.list.length > 0
    ) {
      return (
        <TooltipV3
          title={languages.imageLayout.notice}
          content={languages.imageLayout.content_notice_popup}
          position="bottom"
          width={300}
        >
          <View style={styles.alert}>
            <IconError />
            <Text style={styles.alertText}>{languages.imageLayout.notice}</Text>
          </View>
        </TooltipV3>
      );
    }
  };

  const renderFileList = () => {
    return (
      <>
        {uploadProgress.list.map((file, index) => {
          const fileType = detectFileType(file.name);
          const progress =
            file.status === "failed" || file.status === "success"
              ? 100
              : Math.round(
                  ((file.data.loaded / file.data.total) * 100 +
                    Number.EPSILON) *
                    100
                ) / 100;
          const statusClass =
            file.status === "uploading" || file.status === "processing"
              ? styles.uploading
              : file.status === "failed"
              ? styles.failed
              : styles.success;
          return (
            <View key={index} style={[styles.fileList, statusClass]}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  if (fileType === "image") {
                    // open image preview modal
                  } else if (fileType === "doc") {
                    // open doc preview modal
                  } else {
                    // open unknown file type
                  }
                }}
              >
                <View style={styles.fileInfo}>
                  {renderIconDocument(fileType)}
                  <View style={styles.fileName}>
                    <Text>{file.name}</Text>
                    <Text style={styles.fileSize}>
                      {bytesToSize(file.size)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {file.status !== "success" && (
                <>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      if (
                        file.status === "uploading" ||
                        file.status === "processing"
                      )
                        actionHandle(file, index);
                    }}
                  >
                    {file.status === "uploading" ? (
                      <Text style={[styles.actionButton]}>
                        {languages.imageLayout.cancel_upload}
                      </Text>
                    ) : (
                      <Text style={[styles.actionButton]}>
                        {languages.imageLayout.retry_upload}
                      </Text>
                    )}
                  </TouchableOpacity>
                </>
              )}
            </View>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Loader isVisible={checkProgressStatus() === "uploading"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleWrapper}>
            <IconFolderLocation />
            <Text style={styles.title}>{renderTitle()}</Text>
          </View>
          <View style={styles.controlButtons}>
            {renderControllButton()}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ padding: 5 }}
              onPress={() => setActiveList(!activeList)}
            >
              {activeList ? <IconClose /> : <IconDown />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.listContainer, activeList ? styles.active : null]}>
          <View
            ref={listContainerRef}
            style={styles.resizeBarContainer}
            onLayout={(event) => {
              resizeBar.current = event.nativeEvent.layout.y;
            }}
          >
            <View style={styles.resizeBar}></View>
          </View>
          <View ref={listFileRef} style={styles.fileListWrapper}>
            {renderFileList()}
          </View>
        </View>
      </View>
    </>
  );
};
