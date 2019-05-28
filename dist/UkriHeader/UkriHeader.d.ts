import { FC } from "react";
import { CognitoUser } from "@aws-amplify/auth";
interface Props {
    user?: CognitoUser;
    routes?: {
        [key: string]: string;
    };
}
export declare const UkriHeader: FC<Props>;
export default UkriHeader;
