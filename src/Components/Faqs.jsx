import React from "react";

function Faqs() {
  return (
    <>
      <div className="bg-gradient-to-r from-mt to-ft overflow-hidden h-screen ">
        <div>
          <div className="dropdown dropdown-bottom w-screen mt-1 ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-screen bg-cho border-none flex justify-start hover:bg-cho text-sb"
            >
              Q: Do I need a reservation?
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen"
            >
              <li>
                <a className="font-bold">
                  A: Reservations are recommended, especially during peak hours
                  and weekends, but walk-ins are always welcome.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="dropdown dropdown-bottom w-screen   ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-screen bg-cho border-none flex justify-start hover:bg-cho text-sb"
            >
              Q: Do you offer vegetarian/vegan options?
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen"
            >
              <li>
                <a className="font-bold">
                  A: Yes, we have a variety of vegetarian and vegan dishes on
                  our menu. Please ask our staff for recommendations.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="dropdown dropdown-bottom w-screen   ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-screen bg-cho border-none flex justify-start hover:bg-cho text-sb"
            >
              Q: Do you accommodate food allergies and dietary restrictions?
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen"
            >
              <li>
                <a className="font-bold">
                  A: Absolutely. Please inform your server of any allergies or
                  dietary restrictions, and we will do our best to accommodate
                  your needs.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="dropdown dropdown-bottom w-screen   ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-screen bg-cho border-none flex justify-start hover:bg-cho text-sb"
            >
              Q: Do you host private events?
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen"
            >
              <li>
                <a className="font-bold">
                  A: Yes, we have a private dining area that can be reserved for
                  special events. Please contact us for more details and
                  availability.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
