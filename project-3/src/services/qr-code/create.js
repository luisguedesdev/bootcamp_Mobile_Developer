import prompt from "prompt";
import promptQRcode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";
async function createQRCode() {
  prompt.get(promptQRcode, handle);
}

export default createQRCode;
