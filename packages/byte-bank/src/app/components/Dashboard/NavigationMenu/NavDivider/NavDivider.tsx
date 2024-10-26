import {tabFields} from "$/utils/vars";
import {Divider} from "../../../../../../../design-system/src";
import useUtilsStore from "$/app/store/utils.store";

const NavDivider = ({index, field}: { index: number, field: string }) => {
  const {activeTab} = useUtilsStore()
  return (
    <>
      {index < tabFields.length - 1 &&
          <div className={'max-desktop:hidden'}>
              <Divider isSemantic={false} color={activeTab === field ? 'text-active' : 'text-default'}/>
            {activeTab === field && <Divider isSemantic={false} color={'text-active'}/>}
          </div>
      }
      {activeTab === field &&
          <div className={'desktop:hidden'}>
              <Divider isSemantic={false} color={'text-active'}/>
              <Divider isSemantic={false} color={'text-active'}/>
          </div>
      }
    </>
  )
}
export default NavDivider;