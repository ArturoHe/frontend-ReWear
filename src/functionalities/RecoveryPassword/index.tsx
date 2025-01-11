import React from "react";
import RecoveryBackground from "../../components/RecoveryBackground";
import CardRecovery from "../../components/CardRecovery";
import BoxEmail from "../../components/BoxEmail";
import RecoveryButton from "../../components/RecoveryButton";
import ReturnLink from "../../components/ReturnLink";

const RecoverPassword: React.FC = () => {
  return (
    <RecoveryBackground>
      <CardRecovery>
        <form>
          <BoxEmail />
          <RecoveryButton />
        </form>
        <ReturnLink />
      </CardRecovery>
    </RecoveryBackground>
  );
};

export default RecoverPassword;
