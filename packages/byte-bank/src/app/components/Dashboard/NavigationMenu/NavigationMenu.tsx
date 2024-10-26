import { WidgetContainer} from "../../../../../../design-system/src";
import {tabFields} from "$/utils/vars";
import useUtilsStore from "$/app/store/utils.store";
import NavDivider from "$/app/components/Dashboard/NavigationMenu/NavDivider";

const NavigationMenu = () => {
  const {activeTab, setActiveTab} = useUtilsStore()

  return (
    <div className={'max-tablet:hidden'}>
      <WidgetContainer
        backgroundColor="background-light-grey">
        <nav className={'flex flex-col max-desktop:flex-row max-desktop:justify-between gap-spacing-md'}>
          {tabFields.map((field, index) => (
            <button className={`${activeTab === field && 'text-text-active font-bold'}`}
                    onClick={() => setActiveTab(field)}
                    key={index}
            >
              <span className={`${activeTab === field && 'text-text-active font-bold'}`}>{field}</span>
              <NavDivider index={index} field={field}/>
            </button>
          ))
          }
        </nav>
      </WidgetContainer>
    </div>);
};

export default NavigationMenu;