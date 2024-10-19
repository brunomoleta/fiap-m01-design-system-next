import {Divider, WidgetContainer} from "../../../../../../design-system/src";
import {useState} from "react";

const NavigationMenu = () => {
  const fields = ['Início', 'Transferências', 'Investimentos', 'Outros Serviços'];
  const [activeTab, setActiveTab] = useState('Início');

  return (<>
    <WidgetContainer
      backgroundColor="background-light-grey">
      <nav className={'flex flex-col gap-spacing-md'}>
        {fields.map((field, index) => (
          <button className={`${activeTab===field && 'text-text-active font-bold'}`}
                  onClick={() => setActiveTab(field)}
                  key={index}
          >
            <span>{field}</span>
            <div>
              {index < fields.length - 1 &&
                  <Divider isSemantic={false} color={'text-active'}/>}
            </div>
          </button>
        ))
        }
      </nav>
    </WidgetContainer>
  </>);
};

export default NavigationMenu;