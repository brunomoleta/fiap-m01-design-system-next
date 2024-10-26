import {Alert} from "../../../../../../../design-system/src";
import {ALERT_TYPES} from "$/app/components/Dashboard/Transaction/transaction.data";
import React from "react";
import useUtilsStore from "$/app/store/utils.store";

const TransactionAlert = () => {
  const {setShowAlert, alertType, showAlert} = useUtilsStore()
  return (<>
    {(showAlert &&
        <div className="pt-spacing-md">
            <Alert
                callback={() => setShowAlert(false)}
                text={ALERT_TYPES[alertType].message}
                bgColor={ALERT_TYPES[alertType].color}
            />
        </div>
    )}
  </>)
};

export default TransactionAlert;