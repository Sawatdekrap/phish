import React, { useState } from "react";
import TopNav from "./components/TopNav";
import { styled } from "styled-components";
import Button from "./elements/Button";
import * as styles from "./styles";
import Section, { CenterSection, ThinSection } from "./elements/Section";
import { Comment } from "./elements/Typography";
import EmptyBox from "./icons/EmptyBox";
import AusPostLogo from "./icons/AusPostLogo";
import Burger from "./icons/Burger";
import Link from "./elements/Link";
import SidePanel from "./components/SidePanel";
import SidePanelRow from "./components/SidePanel/SidePanelRow";
import User from "./icons/User";
import Truck from "./icons/Truck";
import Location from "./icons/Location";
import Calculator from "./icons/Calculator";
import Redirect from "./icons/Redirect";
import Label from "./icons/Label";
import Wallet from "./icons/Wallet";
import Currency from "./icons/Currency";
import Missing from "./icons/Missing";
import Clock from "./icons/Clock";
import Store from "./icons/Store";
import Phone from "./icons/Phone";
import Australia from "./icons/Australia";
import Help from "./icons/Help";
import APA from "./icons/apa.svg";
import Assistant from "./icons/assistant.svg";
import Card from "./elements/Card";
import { StepItf, STEPS, Step } from "./steps";

const AppWrapper = styled.div``;

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<StepItf[]>([]);

  const currentStepIdx = completedSteps.length;
  const onConfirm = () => {
    if (currentStepIdx === STEPS.length - 1) {
      document.location.assign(
        "https://auspost.com.au/about-us/about-our-site/online-security-scams-fraud/scam-alerts"
      );
    }

    setCompletedSteps([...completedSteps, STEPS[currentStepIdx]]);
  };

  return (
    <>
      <SidePanel
        isOpen={isSidePanelOpen}
        onClose={() => setIsSidePanelOpen(false)}
      >
        <ThinSection type="dark">
          <SidePanelRow
            icon={User}
            text="Log in"
            link="https://auspost.com.au/auth/login?caller=ACCOUNT_GLOBAL_HEADER&product=MYPOST_CONSUMER&channel=WEB&next=%2Fmypost%2Ftrack%2F%23%2Fsearch"
          />
        </ThinSection>
        <ThinSection type="light">
          <SidePanelRow
            icon={Truck}
            text="Track your item"
            link="https://auspost.com.au/mypost/track/#/search"
          />
          <SidePanelRow
            icon={Location}
            text="Find a postcode"
            link="https://auspost.com.au/postcode"
          />
          <SidePanelRow
            icon={Calculator}
            text="Calculate postage"
            link="https://auspost.com.au/parcels-mail/calculate-postage-delivery-times/#/"
          />
          <SidePanelRow
            icon={Redirect}
            text="Redirect or hold mail"
            link="https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail"
          />
          <SidePanelRow
            icon={Label}
            text="Print shipping labels"
            link="https://auspost.com.au/business/shipping/mypost-business/print-shipping-labels"
          />
          <SidePanelRow
            icon={Wallet}
            text="Pay a bill"
            link="https://paypaperbills.postbillpay.com.au/postbillpay/default.aspx"
          />
          <SidePanelRow
            icon={Currency}
            text="Convert currency"
            link="https://auspost.com.au/currency-converter"
          />
          <SidePanelRow
            icon={Missing}
            text="Find missing mail"
            link="https://auspost.com.au/receiving/delayed-lost-or-damaged-items/find-a-missing-item"
          />
          <SidePanelRow icon={Clock} text="Check delivery times" link="#" />
          <SidePanelRow
            icon={Store}
            text="Find locations & hours"
            link="https://auspost.com.au/locate"
          />
          <SidePanelRow
            icon={Phone}
            text="Download our app"
            link="https://auspost.app.link/3cIoIdqlCab"
          />
          <hr />
          <SidePanelRow
            icon={Australia}
            text="About us"
            link="https://auspost.com.au/about-us"
          />
          <SidePanelRow
            icon={Help}
            text="Help & Support"
            link="https://auspost.com.au/help-and-support"
          />
        </ThinSection>
      </SidePanel>
      <TopNav
        leftItems={[
          <span onClick={() => setIsSidePanelOpen(true)}>{Burger}</span>,
          <span style={{ margin: "0 16px" }}>{AusPostLogo}</span>,
        ]}
        rightItems={[
          <Link href="https://welcome.auspost.com.au/u/login">Log in</Link>,
        ]}
      />
      <div
        style={{
          backgroundColor: styles.COLOR_BACKGROUND_DARK,
        }}
      >
        <Section type="dark">
          <Step stepIdx={currentStepIdx} onConfirm={onConfirm} />
          <Comment>
            {completedSteps.map((s) => (
              <div>✔ {s.stage}</div>
            ))}
          </Comment>
        </Section>
        <CenterSection type="light">
          {EmptyBox}
          <h5>We've missed you for several deliveries</h5>
          <Comment>
            {" "}
            Confirm your identity to help us redirect deliveries to you in the
            future{" "}
          </Comment>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <img
                src={Assistant}
                alt="assistant"
                style={{ width: 56, height: 56, marginRight: 8 }}
              />
              <Comment>
                <strong>
                  Use MyPost to track deliveries across your devices!
                </strong>
              </Comment>
            </div>
            <div style={{ display: "flex", marginTop: 8 }}>
              <Button wide>Sign up</Button>
              <Button type="secondary" wide style={{ marginLeft: 8 }}>
                Log in
              </Button>
            </div>
          </Card>
        </CenterSection>
        <Section type="dark">
          <img
            src={APA}
            alt="Ap Acknowledgement Icon"
            style={{ height: "44px", width: "90px" }}
          />
          <p style={{ fontSize: 12, lineHeight: 1.5 }}>
            Australia Post acknowledges the Traditional Custodians of the land
            on which we operate, live and gather as a team. We recognise their
            continuing connection to land, water and community. We pay respect
            to Elders past, present and emerging.
          </p>
        </Section>
      </div>
    </>
  );
}

export default App;
