import {Transaction} from "$/app/components";
import useUtilsStore from "$/app/store/utils.store";
import useExtractStore from "$/app/store/extract.store";
import useBalanceStore from "$/app/store/balance.store";

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
    {activeTab === 'Investimentos' && <div>INVESTIMENTOS</div>}
    {activeTab === 'Outros Serviços' && <div>OUTROS SERVIÇOS</div>}
  </>)
};

export default Content;