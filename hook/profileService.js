import request from "./request.service";

class ProfileService {
	static login(data) {
		return request({
      url: "/login",
      method: "post",
			data,
		}).then((res) => res.data);
	}
  static async verifyRecaptcha(data) {
    try {
      return await request({
        url: "/recaptcha_verify",
        method: "PUT",
        data,
      }).then((res) => res.data);
    } catch (error) {
      throw error;
    }
  }

  static async updatePasswordByAdmin(id, data) {
    try {
      return await request({
        url: `/auth/users/${id}/change_password_by_admin`,
        method: "PUT",
        data,
      }).then((res) => res.data);
    } catch (error) {
      throw error;
    }
  }

  static async logout(data) {
    try {
      return await request({
        url: "/auth/users/log_out",
        method: "PUT",
        data,
      }).then((res) => res.data);
    } catch (error) {
      throw error;
    }
  }
}

export default ProfileService;