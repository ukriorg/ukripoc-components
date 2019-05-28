import { FC } from "react";
import { CognitoUser } from "@aws-amplify/auth";
export declare const routes: {
    [key: string]: string;
};
interface Props {
    user?: CognitoUser;
}
export declare const UkriHeader: FC<Props>;
export default UkriHeader;
