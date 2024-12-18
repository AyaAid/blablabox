import { ShareSocial } from "react-share-social";

const Friends = () => {
  return (
    <ShareSocial
      url="url_to_share.com"
      socialTypes={["facebook", "twitter", "reddit", "linkedin", "whatsapp"]}
    />
  );
};

export default Friends;
