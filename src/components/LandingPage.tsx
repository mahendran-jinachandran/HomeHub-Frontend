import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";
import Button from "./shared/Button";
import { BiSolidHomeHeart } from "react-icons/bi";
import Card from "./shared/Card";
import { FcCalendar, FcTodoList } from "react-icons/fc";
import { RiSecurePaymentFill } from "react-icons/ri";

const LandingPage = () => {
  return (
    <Card margin="md" padding="lg" height="vlg">
      <nav className="flex justify-between">
        <header className="flex align-middle justify-center">
          <BiSolidHomeHeart size={42} color="#579feb" />
          <h1 className="text-3xl font-semibold m-2 font-inter leading-tight">
            Home Hub
          </h1>
        </header>

        <div className="flex">
          <Button buttonType="default" buttonText="Home" />
          <Button buttonType="default" buttonText="Features" />
          <Button buttonType="default" buttonText="Pricing" />
          <Button
            buttonType="primary"
            buttonText="Get Started"
            navigateRoute="/login"
          />
        </div>
      </nav>

      <section className="grid grid-cols-[1fr_2fr] gap-4">
        <article className="flex flex-col justify-center align-middle leading-relaxed">
          <h2 className="font-inter font-semibold text-5xl leading-relaxed">
            Your Home, Organised
          </h2>
          <p className="font-inter font-normal leading-relaxed font">
            Organise your family's life with a shared calendar, tasks,
            groceries, and reminders - all in one place
          </p>
          <Button
            buttonText="Get Started - It's Free"
            buttonType="primary"
            navigateRoute="/login"
          />
          <Button
            buttonText="Learn more"
            buttonType="default"
            color="text-secondary"
            icon={<FaArrowRightLong />}
          />
        </article>
        <img
          src="src/assets/family image.webp"
          alt="A family image"
          className="w-7xl"
        />
      </section>

      <section className="mt-6">
        <h2 className="font-inter font-medium text-2xl text-center">
          How HomeHub helps your family
        </h2>
        <div className="grid grid-cols-[1fr_1fr] gap-2">
          <article className="flex justify-center items-center ">
            <Card padding="sm">
              <div className="flex items-center justify-center gap-3 h-20 w-4xl">
                <FcCalendar size={42} />
                <div>
                  <h3 className="font-inter font-medium text-xl">
                    Shared Family Calendar
                  </h3>
                  <p className="font-inter font-light">
                    Keep everyone in sync with a single shared view of
                    schedules, events, and reminders - so nothing gets missed
                  </p>
                </div>
              </div>
            </Card>
          </article>

          <article className="flex justify-center items-center ">
            <Card padding="sm">
              <div className="flex items-center justify-center gap-3 h-20 w-4xl">
                <RiSecurePaymentFill size={42} color="green" />
                <div>
                  <h3 className="font-inter font-medium text-xl">
                    Bills and Payment
                  </h3>
                  <p className="font-inter font-light">
                    Track upcoming bills, due dates, and payment status at a
                    glance without digging through messages or emails
                  </p>
                </div>
              </div>
            </Card>
          </article>

          <article className="flex justify-center items-center ">
            <Card padding="sm">
              <div className="flex items-center justify-start gap-3 h-20 w-4xl">
                <FcTodoList size={42} />
                <div>
                  <h3 className="font-inter font-medium text-xl">
                    Chores & Responsibilities
                  </h3>
                  <p className="font-inter font-light">
                    Make Responsibilities visible and fair with clear ownership
                    and completion tracking
                  </p>
                </div>
              </div>
            </Card>
          </article>

          <article className="flex justify-center items-center ">
            <Card padding="sm">
              <div className="flex items-center justify-center gap-3 h-20 w-4xl">
                <FaCartShopping size={42} color="green" />
                <div>
                  <h3 className="font-inter font-medium text-xl">
                    Shared Family Calendar
                  </h3>
                  <p className="font-inter font-light">
                    Keep everyone in sync with a single shared view of
                    schedules, events, and reminders - so nothing gets missed
                  </p>
                </div>
              </div>
            </Card>
          </article>
        </div>
        <article
          style={{
            width: "114rem",
          }}
          className="flex justify-center items-center flex-col mt-4 gap-4 bg-amber-100 p-5"
        >
          <h2 className="font-inter text-2xl text-center font-medium">
            Ready to organise your home life?
          </h2>
          <p className="font-inter text-center">
            Start with one shared place for everything
          </p>
          <Button
            buttonText="Create your HomeHub account"
            buttonType="primary"
          />
        </article>
      </section>

      <footer className="flex justify-center items-center gap-5 mt-4">
        <Button buttonText="About" buttonType="default" />
        <Button buttonText="Blog" buttonType="default" />
        <Button buttonText="Privacy" buttonType="default" />
        <Button buttonText="Help" buttonType="default" />
      </footer>
    </Card>
  );
};

export default LandingPage;
