import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = ({ data }) => {
    return (
        <footer style={{ padding: "2rem", background: "#f8f8f8", color: "#333" }}>
            <div style={{ display: "flex", gap: "3rem" }}>

                {/* ONLINE SHOPPING */}
                <div>
                    <h4>ONLINE SHOPPING</h4>
                    <ul style={{ listStyle: "none", padding: 0, }}>
                        {data?.Online_Shopping?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* CUSTOMER POLICIES */}
                <div>
                    <h4>CUSTOMER POLICIES</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {data?.Customer_Policies?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* USEFUL LINKS */}
                <div>
                    <h4>USEFUL LINKS</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {data?.Useful_Links?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* MOBILE APP & SOCIAL */}
                <div>
                    <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" width={100} alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" width={100} alt="" />
                    </div>

                    <h4>KEEP IN TOUCH</h4>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                        <FaFacebookSquare style={{ fontSize: "20px" }} />
                        <FaTwitter style={{ fontSize: "20px" }} />
                        <FaYoutube style={{ fontSize: "20px" }} />
                        <TiSocialInstagram style={{ fontSize: "20px" }} />
                    </div>
                </div>

                {/* PROMISES (100% Original, 14-day return) */}
                <div style={{ marginTop: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                        <img
                            src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                            alt="Original Guarantee"
                            width="40"
                            style={{ marginRight: "10px" }}
                        />
                        <span><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                            alt="Return Policy"
                            width="40"
                            style={{ marginRight: "10px" }}
                        />
                        <span><strong>Return within 14 days</strong> of receiving your order</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;