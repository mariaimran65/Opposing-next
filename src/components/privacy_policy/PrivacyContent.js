import { BreadcrumbJsonLd } from 'next-seo';
import Link from 'next/link';
import Container from '../../layouts/Container';
import { BASE_URI } from '../../../config';
import { productName } from '@/constants/productName';

function PrivacyContent() {
  return (
    <Container>
      <div style={{ marginBottom: '50px' }} className="container">
        <br />
        <div className="other-header flex justify-between">
          <div>
            <h1 className="text-[22px]" style={{ lineHeight: 1.2 }}>
              PRIVACY POLICY
            </h1>
            <p className="text-sm">Last updated March 2, 2022</p>
          </div>
        </div>

        <br />
        <p className="text-[18px] leading-[29px]">
          Thank you for choosing to be part of our community at {productName}--A
          product of Pursue Today LLC. We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about our notice, or our practices with regards
          to your personal information, please contact us at{' '}
          <Link href="mailto:info@gocustomer.ai" className="text-primaryColor">
            info@gocustomer.ai
          </Link>
          .
        </p>
        <br />
        <p className="text-[18px] leading-[29px]">
          When you use or access our Site, you trust us with your personal
          information. We take your privacy very seriously. We seek to explain
          to you in the clearest way possible what information we collect from
          you, how we use it and what rights you have in relation to it. We hope
          you take some time to read through it carefully, as it is important.
          If there are any terms in this Privacy Policy ("Policy") that you do
          not agree with, please discontinue use of our Site.
        </p>
        <br />
        <p className="text-[18px] leading-[29px]">
          This Policy applies to all information collected through Site (please
          see the definition of capitalized words in the Policy and Agreement /
          Terms of Use).
        </p>
        <br />
        <p className="text-[18px] leading-[29px]">
          Please read this Policy carefully as it will help you make informed
          decisions about sharing your personal information with us.
        </p>
        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          TABLE OF CONTENTS
        </h2>
        <div id="toc_container" className="md:ml-[1.5rem]">
          <ol className="toc_list list-decimal">
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#WHAT_INFORMATION_DO_WE_COLLECT">
                WHAT INFORMATION DO WE COLLECT?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#HOW_DO_WE_USE_YOUR_INFORMATION">
                HOW DO WE USE YOUR INFORMATION?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#WILL_YOUR_INFORMATION_BE_SHARED_WITH_ANYONE">
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION">
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#HOW_DO_WE_KEEP_YOUR_INFORMATION_SAFE">
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#DO_WE_COLLECT_INFORMATION_FROM_MINORS">
                DO WE COLLECT INFORMATION FROM MINORS?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#WHAT_ARE_YOUR_PRIVACY_RIGHTS">
                WHAT ARE YOUR PRIVACY RIGHTS?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#CONTROLS_FOR_DO_NOT_TRACK_FEATURES">
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS">
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#DO_WE_MAKE_UPDATES_TO_THIS_POLICY">
                DO WE MAKE UPDATES TO THIS POLICY?
              </Link>
            </li>
            <li className="text-primaryColor hover:text-accentColor text-[18px]">
              <Link href="#HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_POLICY">
                HOW CAN YOU CONTACT US ABOUT THIS POLICY?
              </Link>
            </li>
          </ol>
        </div>
        <br />
        <div id="WHAT_INFORMATION_DO_WE_COLLECT">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            WHAT INFORMATION DO WE COLLECT?
          </h3>
          <p className="text-[18px] leading-[29px]">
            Some information – such as IP address and/or browser and device
            characteristics – is collected automatically when you visit our
            Apps. We automatically collect certain information when you visit,
            use or navigate the Site. This information may not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, your content
            regarding our services, language preferences, referring URLs, device
            name, country, location, information about how and when you use our
            Site and other technical information. This information is primarily
            needed to maintain the security and operation of our Site, and for
            our internal analytics and reporting purposes. Like many businesses,
            we also collect information through cookies and similar
            technologies. When you use the Site, we and our third-party partners
            may automatically collect or receive certain information about your
            device, log data and usage of the Site (collectively “Service Usage
            Data”), which includes without limitation your name, email address,
            billing address, SMTP credentials, payment information (e.g.
            information you provide to us), browser information, and information
            we collect from third party-sources. In some (but not all)
            countries, including countries in the European Economic Area
            (“EEA”), this information is considered Personal Information under
            applicable data protection laws. We and our third-party partners use
            cookies and other tracking technologies to collect some of this
            information. If you are using our Site, we may collect this
            information using our software development kits (“SDKs”) or APIs.
          </p>
        </div>
        <br />
        <div id="HOW_DO_WE_USE_YOUR_INFORMATION">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            HOW DO WE USE YOUR INFORMATION?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We process your information for purposes based on legitimate
            business interests, the fulfillment of our contract with you,
            compliance with our legal obligations, and/or your consent. We use
            personal information collected via our Site for a variety of
            business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below. We use the information we collect
            or receive to (i) to facilitate account creation and logon process
            (ii) to send you promotional communications, (iii) to post
            testimonials with your consent (iv) to deliver advertisement to you,
            (v) to request feedback, (vi) to protect and improve our services,
            (vii) to enable communication, (viii) to enforce our Agreement, (ix)
            to respond legal requests, (x) to manage accounts, (xi) to deliver
            our services, and (xi) for data analysis and aggregation.
          </p>
        </div>
        <br />
        <div id="WILL_YOUR_INFORMATION_BE_SHARED_WITH_ANYONE">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            legitimate business obligations or interests, with vendors,
            consultants, advertisers and other third-party service providers,
            for example for payment processing, data analysis, email delivery,
            hosting services, customer service, feedback systems and marketing
            efforts.
          </p>
        </div>
        <br />
        <div id="DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We may use cookies and other tracking technologies to collect and
            store your information (like web beacons, pixels, authentication
            token and chosen plan).
          </p>
        </div>
        <br />
        <div id="HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            HOW LONG DO WE KEEP YOUR INFORMATION?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We keep your information for as long as necessary to fulfill the
            purposes outlined in this privacy notice unless otherwise required
            by law (such as tax, accounting or other legal requirements). When
            we have no ongoing legitimate business need to process your personal
            information, we will either delete or anonymize it.
          </p>
        </div>
        <br />
        <div id="HOW_DO_WE_KEEP_YOUR_INFORMATION_SAFE">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We aim to protect your personal information through a system of
            organizational and technical security measures. We have implemented
            appropriate technical and organizational security measures designed
            to protect the security of any personal information we process.
            However, please also remember that we cannot guarantee that the
            internet itself is 100% secure. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Site is at your own risk. You should
            only access the services within a secure environment.
          </p>
        </div>
        <br />
        <div id="DO_WE_COLLECT_INFORMATION_FROM_MINORS">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            DO WE COLLECT INFORMATION FROM MINORS?
          </h3>
          <p className="text-[18px] leading-[29px]">
            We do not knowingly collect data from or market to children under 13
            years of age. By using the Site, you represent that you are at least
            13 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Apps. If we learn that
            personal information from users less than 13 years of age has been
            collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we have collected from children under age
            13, please contact us at{' '}
            <Link
              href="mailto:info@gocustomer.ai"
              className="text-primaryColor"
            >
              info@gocustomer.ai
            </Link>
            .
          </p>
        </div>
        <br />
        <div id="WHAT_ARE_YOUR_PRIVACY_RIGHTS">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            WHAT ARE YOUR PRIVACY RIGHTS?
          </h3>
          <p className="text-[18px] leading-[29px]">
            In some regions, such as the European Economic Area, you have rights
            that allow you greater access to and control over your personal
            information. Upon request, you may review, change, or terminate your
            account at any time. These may include the right (i) to request
            access and obtain a copy of your personal information, (ii) to
            request rectification or erasure; (iii) to restrict the processing
            of your personal information; and (iv) if applicable, to data
            portability. To make such a request, please use the contact details
            provided below. We will consider and act upon any request in
            accordance with applicable data protection laws. If we are relying
            on your consent to process your personal information, you have the
            right to withdraw your consent at any time. Please note however that
            this will affect your experience in using the Site and will not
            affect the lawfulness of the processing before consent's withdrawal.
          </p>
          <p className="text-[18px] leading-[29px]">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, some information may be retained in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our Agreement and/or comply with legal requirements.
          </p>
          <h4 className="text-[20px] font-semibold">
            Opting out of email marketing:
          </h4>
          <p className="text-[18px] leading-[29px]">
            You can unsubscribe from our marketing email list at any time by
            clicking on the unsubscribe link in the emails that we send –
            however, we will still need to send you service-related emails that
            are necessary for the administration and use of your account.
          </p>
        </div>
        <br />
        <div id="CONTROLS_FOR_DO_NOT_TRACK_FEATURES">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            CONTROLS FOR DO-NOT-TRACK FEATURES
          </h3>
          <p className="text-[18px] leading-[29px]">
            Most web browsers and some mobile operating systems include a
            Do-Not-Track (“DNT”) feature or setting you can activate to signal
            your privacy preference not to have data about your online browsing
            activities monitored and collected.
          </p>
        </div>
        <br />
        <div id="DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h3>
          <p className="text-[18px] leading-[29px]">
            Yes, if you are a resident of California, you are granted specific
            rights regarding access to your personal information.
          </p>
          <p className="text-[18px] leading-[29px]">
            California Civil Code Section 1798.83, also known as the “Shine The
            Light” law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year.
          </p>
          <p className="text-[18px] leading-[29px]">
            If you are under 13 years of age, reside in California, and have a
            registered account with the Apps, you have the right to request
            removal of unwanted data that you publicly post on the Apps. To
            request removal of such data, please contact us using the contact
            information provided below, and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Site, but
            please be aware that the data may not be completely or
            comprehensively removed from our systems.
          </p>
        </div>
        <br />
        <div id="DO_WE_MAKE_UPDATES_TO_THIS_POLICY">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            DO WE MAKE UPDATES TO THIS POLICY?
          </h3>
          <p className="text-[18px] leading-[29px]">
            Yes, we may update this privacy notice from time to time. The
            updated version will be indicated by an updated “Revised” date and
            the updated version will be effective as soon as it is accessible.
            We encourage you to review this privacy notice frequently to be
            informed of how we are protecting your information.
          </p>
        </div>
        <br />
        <div id="HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_POLICY">
          <h3 className="text-[22px] font-semibold" style={{ lineHeight: 1.2 }}>
            HOW CAN YOU CONTACT US ABOUT THIS POLICY?
          </h3>
          <p className="text-[18px] leading-[29px]">
            If you have questions or comments about this policy, you may contact
            us at{' '}
            <Link
              href="mailto:info@gocustomer.ai"
              className="text-primaryColor"
            >
              info@gocustomer.ai
            </Link>
            .
          </p>
        </div>
      </div>
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: BASE_URI },
          {
            position: 2,
            name: 'Privicy Policy',
            item: `${BASE_URI}/privacy-policy`
          }
        ]}
      />
    </Container>
  );
}

export default PrivacyContent;
