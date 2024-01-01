import Icon from "../Components/Icon";
import { AiFillGithub, AiFillSmile } from "react-icons/ai";
import { FaAppleAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <Icon component={AiFillGithub} />
            <Icon component={AiFillSmile} />
            <Icon component={FaAppleAlt} color="red" />
        </div>
    );
}
