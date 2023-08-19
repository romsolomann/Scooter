import { Box } from "@mui/system";
import { type IconProps } from "react-toastify";

export const getToastType = ({ type }: IconProps) => {
	switch (type) {
		case "error": {
			return <Box sx={{ color: "white" }} />;
		}
		case "success": {
			return <Box sx={{ color: "white" }} />;
		}
	}
};
