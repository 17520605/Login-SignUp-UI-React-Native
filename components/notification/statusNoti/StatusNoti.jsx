import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import eventBus from "utilities/eventBus";

import AuthModal from "components/modal/authModal/AuthModal";
import ChangePasswordModal from "components/modal/changePasswordModal/ChangePasswordModal";
import ChooseFolderModal from "components/modal/chooseFolderModal/ChooseFolderModal";
import CreateCommunityModal from "components/modal/createCommunityModal/CreateCommunityModal";
import CreateFolderCommunityModal from "components/modal/createFolderCommunityModal/CreateFolderCommunityModal";
import CreateFolderModal from "components/modal/createFolderModal/CreateFolderModal";
import DetailAssetModal from "components/modal/detailAssetModal/DetailAssetModal";
import DetailCMetaModal from "components/modal/detailCMetaModal/DetailCMetaModal";
import EditCommunityModal from "components/modal/editCommunityModal/EditCommunityModal";
import InviteModal from "components/modal/inviteModal/InviteModal";
import ListFacesModal from "components/modal/listFacesModal/ListFacesModal";
import ListIconsModal from "components/modal/listIconsModal/ListIconsModal";
import MapLeafModal from "components/modal/mapLeafModal/MapLeafModal";
import MenuLandingModal from "components/modal/menuLandingModal/MenuLandingModal";
import MoveFolderCommunityModal from "components/modal/moveFolderCommunityModal/MoveFolderCommunityModal";
import MoveFolderModal from "components/modal/moveFolderModal/MoveFolderModal";
import RenameFolderModal from "components/modal/renameFolderModal/RenameFolderModal";
import ShareAssetModal from "components/modal/shareAssetModal/ShareAssetModal";
import UploadModal from "components/modal/uploadModal/UploadModal";
import VerifyModal from "components/modal/verifyModal/VerifyModal";

import AssetPickingModal from "../detailAssetModal/assetPickingModal/AssetPickingModal";

const modalComponents = {
  UploadModal,
  CreateFolderModal,
  MoveFolderModal,
  MoveFolderCommunityModal,
  DetailAssetModal,
  ListFacesModal,
  MapLeafModal,
  RenameFolderModal,
  AuthModal,
  MenuLandingModal,
  DetailCMetaModal,
  VerifyModal,
  ChooseFolderModal,
  InviteModal,
  CreateCommunityModal,
  ListIconsModal,
  AssetPickingModal,
  EditCommunityModal,
  CreateFolderCommunityModal,
  ShareAssetModal,
  ChangePasswordModal,
};

export default class ModalComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLayer1: null,
      modalLayer2: null,
    };
  }

  renderModal = (data) => {
    if (this.state.modalLayer1 == null) {
      this.setState({ modalLayer1: data });
    } else {
      this.setState({ modalLayer2: data });
    }
  };

  closeModal = () => {
    if (this.state.modalLayer2 != null) {
      this.setState({ modalLayer2: null });
    } else {
      this.setState({ modalLayer1: null });
    }
  };

  closeAllModal = () => {
    this.setState({
      modalLayer1: null,
      modalLayer2: null,
    });
  };

  closeModalEsc = (e) => {
    if (e.key === "Escape") {
      if (this.state.modalLayer2 != null) {
        this.setState({ modalLayer2: null });
      } else {
        this.setState({ modalLayer1: null });
      }
    }
  };

  closeAllModalByEsc = (e) => {
    if (e.key === "Escape") {
      this.closeAllModal();
    }
  };

  componentDidMount() {
    eventBus.on("system/openModal", this.renderModal);
    eventBus.on("system/closeModal", this.closeModal);
    eventBus.on("system/closeAllModal", this.closeAllModal);

    // window.addEventListener("keyup", this.closeAllModalByEsc);
    window.addEventListener("keyup", this.closeModalEsc);
  }

  componentWillUnmount() {
    eventBus.remove("system/openModal");
    eventBus.remove("system/closeModal");
    eventBus.remove("system/closeAllModal");

    // window.removeEventListener("keyup", this.closeAllModalByEsc);
    window.removeEventListener("keyup", this.closeModalEsc);
  }

  render() {
    let ComponentsLayer1 = null;
    let ComponentsLayer2 = null;

    if (this.state.modalLayer1) {
      ComponentsLayer1 = modalComponents[this.state.modalLayer1.name];
    }

    if (this.state.modalLayer2) {
      ComponentsLayer2 = modalComponents[this.state.modalLayer2.name];
    }

    return (
      <View style={styles.container}>
        {ComponentsLayer1 ? (
          <ComponentsLayer1 {...this.state.modalLayer1.data} />
        ) : null}
        {ComponentsLayer2 ? (
          <ComponentsLayer2 {...this.state.modalLayer2.data} />
        ) : null}
      </View>
    );
  }
}
