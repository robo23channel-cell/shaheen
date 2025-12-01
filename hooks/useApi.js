import { useState } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";

export default useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, SetStatus] = useState("");
  const navigation = useNavigation();
  const pushAction = StackActions.push("401");

  const setErrorMessage = (res) => {
    if (res.status == "401") {
      console.log("ERROR UNAUTH with status : ", res.status);
      //return navigation.dispatch(pushAction);
    }
    const ErrorMsg = res.data?.errors?.Messages;
    setError(true);
    setData(ErrorMsg);
  };

  const request = async (...args) => {
    setData(null);
    SetStatus("");
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // console.log(status)
    if (!response?.ok) setErrorMessage(response);
    else {
      setData(response.data);
      setError(false);
    }

    SetStatus(response.status);
    return response;
  };
  return { data, error, setError, loading, request, status };
};
