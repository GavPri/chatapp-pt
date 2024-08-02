import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "src/components/ui/alert";

const TeamChannelList = ({ children, error = true, loading, type }) => {
  // set state for error message
  if (error) {
    return type === "team" ? (
      <Alert
        variant="destructive"
        className="h-24 w-10/12 mx-auto mt-4 bg-slate-950"
      >
        <AlertCircle className="h-6 w-6" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Connection error. Please try again</AlertDescription>
      </Alert>
    ) : null;
  }
  if (loading) {
    return (
      <Alert className="h-24 w-10/12 mx-auto mt-4 bg-slate-950 text-slate-300">
        <AlertCircle className="h-6 w-6" />
        <AlertTitle>
          {(type = "team" ? "Channels" : "Messages")}loading
        </AlertTitle>
      </Alert>
    );
  }
  return <></>;
};

export default TeamChannelList;
