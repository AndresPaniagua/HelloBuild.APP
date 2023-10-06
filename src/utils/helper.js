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
