import { redirect } from "next/dist/server/api-utils";
import { 
    resendSignUpCode,
    signIn,
    signOut,
 } from "aws-amplify/auth";
 import { getErrorMessage } from "@/utils/get-error-message";

 export async function handleSendEmailVerificationCode(
    prevState,
    formData
 ) {
    let currentState;
    try {
        await resendSignUpCode({
            username: formData.get("email"),
        });
        currentState = {
            ...prevState,
            message: "Verification code sent",
        };
    } catch (error) {
        currentState = {
            ...prevState,
            message: getErrorMessage(error),
        };
    }

    return currentState;
 }

 export async function handleSignIn(prevState, formData) {
    let redirectLink = "/";
    try {
        const {isSignedIn, nextStep} = await signIn({
            username: formData.get("email"),
            password: formData.get("password"),

    });
    } catch (error) { 
        return getErrorMessage(error);
    }
    redirect(redirectLink);
  }

    export async function handleSignOut() {
        try {
            await signOut();
        } catch (error) {
            console.log(getErrorMessage(error));
        }
        redirect("/auth/login");
    }
