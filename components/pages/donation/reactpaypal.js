import React from "react";
import styles from "./reactpaypal.module.scss";
import ModalLoggedout from "../home/modal-logged-out";
import axios from "axios";

export default function ReactPayPal() {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const [user, setUser] = React.useState("Gustavo");
  const paypalRef = React.useRef();
  const [ModalLoggedoutShow, SetModalLoggedoutShow] = React.useState(false);
  const [auth, isAuth] = React.useState(false);
  const [name, setName] = React.useState("");

  // Show PayPal buttons once the component loads
  React.useEffect(() => {
    let paypalScript = document.getElementById("paypal-script");

    let tokenAut = localStorage.getItem("token");

    axios
      .post(process.env.NEXT_PUBLIC_API + "verify", {
        token: tokenAut
      })
      .then(
        response => {
          console.log(response.data.message);

          if (response.data.message === "Successful Login...") {
            isAuth(true);
            console.log(auth);
            //    console.log(response.data.verifiedJwt.body.name);
            //setName(response.data.verifiedJwt.body.name);

            axios
              .post(process.env.NEXT_PUBLIC_API + "getemail", {
                Login: response.data.verifiedJwt.body.name
              })
              .then(
                response => {
                  console.log(response.data);

                  function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                  }
                  setName(response.data);

                  new Promise(resolve => {
                    if (paypalScript) {
                      resolve(true);
                    } else {
                      const target = document.body;
                      const tag = document.createElement("script");
                      setUser(
                        capitalizeFirstLetter(localStorage.getItem("userName"))
                      );
                      tag.async = false;
                      tag.id = "paypal-script";
                      tag.src =
                        "https://www.paypal.com/sdk/js?client-id=" +
                        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID +
                        "&currency=BRL";
                      target.appendChild(tag);
                      tag.addEventListener("load", resolve, {
                        once: true
                      });
                    }
                  }).then(() => {
                    setReady(true);
                    window.paypal
                      .Buttons({
                        createOrder: (data, actions) => {
                          return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                description: "Your description",
                                amount: {
                                  currency_code: "BRL",
                                  value: 10.0
                                }
                              }
                            ]
                          });
                        },
                        onApprove: async (data, actions) => {
                          const order = await actions.order.capture();
                          setPaid(true);
                          console.log(order);
                        },
                        onError: err => {
                          //   setError(err),
                          console.error(err);
                        }
                      })
                      .render(paypalRef.current);
                  });
                },
                err => {
                  console.log(err);
                }
              );
          } else {
            isAuth(false);
            console.log(auth);
            SetModalLoggedoutShow(true);
          }
        },
        err => {
          console.log(err);
        }
      );
  }, []);

  // Success
  if (paid) {
    return <h2>Thank you for your help, {user}!</h2>;
  }

  // Error
  if (error) {
    return (
      <h2>
        An error occurred while processing your payment. Please try again.
      </h2>
    );
  }

  // Render
  return (
    <div>
      {ready === true ? (
        <div>
          <h4>Hello, {user}!</h4>
          <p>
            We appreaciate the time you spent playing our game! While we have
            made some great achievements, there is still a lot to accomplish.
          </p>
          <p>
            However, we need your support to keep going. Would you consider
            donating <strong>R$10</strong> to help us achieve our objectives?
          </p>
          <p>
            To help us, please click the button bellow and proceed with the
            payment process, thank you!
          </p>
          <div className={styles.paypalButtons} ref={paypalRef} />
        </div>
      ) : (
        <span>Loading...</span>
      )}
      <ModalLoggedout
        centered
        show={ModalLoggedoutShow}
        onHide={() => SetModalLoggedoutShow(false)}
      />
    </div>
  );
}
