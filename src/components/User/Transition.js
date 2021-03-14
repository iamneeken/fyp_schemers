    export const sign_in_btn = () => {

      const container = document.querySelector(".containerLogin");
      container.classList.remove("sign-up-mode");
    };
    
    export const sign_up_btn = () => {
      const container = document.querySelector(".containerLogin");
      container.classList.add("sign-up-mode");
    };

export default {sign_in_btn, sign_up_btn};
