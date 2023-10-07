export const showLoader = (message) => {
  window.$("body").loadingModal({
    position: "auto",
    text: message,
    color: "#FFFFFF",
    opacity: "0.4",
    backgroundColor: "#000000",
    animation: "circle",
  });
  window.$("body").loadingModal("show");
};

export const closeLoader = () => {
  window.$("body").loadingModal("hide");
  window.$("body").loadingModal("destroy");
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    return false;
  } else {
    return true;
  }
}
