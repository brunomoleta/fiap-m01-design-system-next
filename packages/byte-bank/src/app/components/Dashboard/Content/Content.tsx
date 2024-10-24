import {Transaction, Services} from "$/app/components";
import useUtilsStore from "$/app/store/utils.store";
import useExtractStore from "$/app/store/extract.store";
import useBalanceStore from "$/app/store/balance.store";
import Investments from "../Investments";

const Content = () => {
  const {activeTab} = useUtilsStore();
  const {fetchExtractData} = useExtractStore();
  const {fetchBalanceData} = useBalanceStore();

  const refreshData = () => {
    fetchExtractData();
    fetchBalanceData();
  };

  return (<>
    {activeTab==='Início' && <Transaction refreshExtract={refreshData}/>}
    {activeTab==='Transferências' && <div>TRANSFERÊNCIAS</div>}
    {activeTab === 'Investimentos' && <Investments />}
    {activeTab === 'Outros Serviços' && <Services />}
  </>)
};

export default Content;