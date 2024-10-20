import {Divider, WidgetContainer} from "../../../../../../design-system/src";
import {tabFields} from "$/utils/vars";
import useUtilsStore from "$/app/store/utils.store";

const NavigationMenu = () => {
  const {activeTab, setActiveTab} = useUtilsStore()

  return (<>
    <WidgetContainer
      backgroundColor="background-light-grey">
      <nav className={'flex flex-col gap-spacing-md'}>
        {tabFields.map((field, index) => (
          <button className={`${activeTab===field && 'text-text-active font-bold'}`}
                  onClick={() => setActiveTab(field)}
                  key={index}
          >
            <span>{field}</span>
            <div>
              {index < tabFields.length - 1 &&
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