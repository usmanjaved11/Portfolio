import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-DfQQ7Bga.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
	email: stringType().trim().min(1, "Email is required.").max(200, "Email is too long.").email("Please provide a valid email address."),
	message: stringType().trim().min(10, "Message must be at least 10 characters.").max(5e3, "Message is too long.")
});
var recentSubmissions = [];
var RATE_LIMIT = 5;
var RATE_WINDOW_MS = 6e4;
function isRateLimited() {
	const now = Date.now();
	while (recentSubmissions.length > 0 && now - recentSubmissions[0] > RATE_WINDOW_MS) recentSubmissions.shift();
	if (recentSubmissions.length >= RATE_LIMIT) return true;
	recentSubmissions.push(now);
	return false;
}
var sendContactMessage_createServerFn_handler = createServerRpc({
	id: "f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a",
	name: "sendContactMessage",
	filename: "src/lib/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => data).handler(sendContactMessage_createServerFn_handler, async ({ data }) => {
	try {
		const parsed = contactSchema.safeParse(data);
		if (!parsed.success) return {
			success: false,
			message: parsed.error.issues[0]?.message ?? "Please check the form and try again."
		};
		if (isRateLimited()) return {
			success: false,
			message: "Too many messages sent. Please try again in a minute."
		};
		const { error } = await createClient(process.env["VITE_SUPABASE_URL"], process.env["VITE_SUPABASE_PUBLISHABLE_KEY"], { auth: {
			persistSession: false,
			autoRefreshToken: false
		} }).from("contact_messages").insert(parsed.data);
		if (error) {
			console.error("contact insert failed", error);
			return {
				success: false,
				message: "Something went wrong. Please try again later."
			};
		}
		return {
			success: true,
			message: "Your message has been sent successfully."
		};
	} catch (error) {
		console.error("contact handler failed", error);
		return {
			success: false,
			message: "Something went wrong. Please try again later."
		};
	}
});
//#endregion
export { sendContactMessage_createServerFn_handler };
