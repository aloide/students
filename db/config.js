const priv_key = process.env.FIRE_PRIVATE_KEY
const priv_key_id = process.env.FIRE_PRIVATE_KEY_ID

export default{
  "type": "service_account",
  "project_id": "asistencia-edo",
  "private_key_id":priv_key_id,
  "private_key":priv_key,
  "client_email": "firebase-adminsdk-cmfqo@asistencia-edo.iam.gserviceaccount.com",
  "client_id": "104401259989396456120",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cmfqo%40asistencia-edo.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
