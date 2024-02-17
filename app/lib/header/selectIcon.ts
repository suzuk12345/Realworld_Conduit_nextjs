import EditorIcon from "@/ui/icon/EditorIcon";
import SettingIcon from "@/ui/icon/SettingIcon";

export const selectIcon = (href: string) => {
  if (href === "/settings") {
    return SettingIcon()
  } else if (href === "/editor") {
    return EditorIcon()
  } else {
    return ''
  }
};
