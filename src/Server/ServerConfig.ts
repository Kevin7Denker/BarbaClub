import {
  GOOGLE_CLIENT_ID_WEB,
  GOOGLE_CLIENT_ID_ANDROID,
  GOOGLE_CLIENT_SECRET,
} from "../../env";

class ServerConfig {
  android = GOOGLE_CLIENT_ID_ANDROID || null;
  web = GOOGLE_CLIENT_ID_WEB || null;
  secret = GOOGLE_CLIENT_SECRET || null;
}

export default ServerConfig;
