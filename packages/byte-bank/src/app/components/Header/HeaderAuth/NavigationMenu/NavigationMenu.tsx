import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {Divider, HamburgerIcon} from "../../../../../../../design-system/src";
import {tabFields} from "$/utils/vars";
import useUtilsStore from "$/app/store/utils.store";

const NavigationMenu = () => {
  const {activeTab, setActiveTab} = useUtilsStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className={'tablet:hidden'} aria-label='Menu de navegação'>
          <HamburgerIcon width={32} height={32} fill={'background-accent'}/>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={'p-spacing-lg w-100svw rounded-spacing-sm'}>
          {tabFields.map((field, index) => (
            <DropdownMenu.Item onClick={() => setActiveTab(field)} className={' bg-text-revert py-spacing-md text-center px-spacing-lg'} key={index}>
              <span className={`py-spacing-lg ${activeTab === field ? 'text-background-accent' : ''}`}>{field}</span>
              {index < tabFields.length - 1 &&
                  <div>
                      <Divider isSemantic={false} color={activeTab === field ? 'text-active' : 'text-default'}/>
                    {activeTab === field && <Divider isSemantic={false} color={'text-active'}/>}
                  </div>
              }
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
export default NavigationMenu;
