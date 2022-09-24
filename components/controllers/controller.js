let checkAuth = async (login) => {
  return fetch("https://dportal.onrender.com/api/"_URL + "one/" + login, {
    method: "get",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        if (Array.isArray(result) && result.length) {
          console.log("success");
          return "success";
        } else {
          console.log("oops");
          return "oops";
        }
      }
      // (error) => {
      //   console.log(error);
      //   return error;
      // }
    );
};

export { checkAuth };
