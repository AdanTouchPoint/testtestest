export const colorSetter = async (colors) =>{

    document.documentElement.style.setProperty('--main-bg-color', colors.background_color);
        document.documentElement.style.setProperty('--main-texts-color', colors.text_color);
        document.documentElement.style.setProperty('--main-inputs-bg-color', colors.input_color);
        document.documentElement.style.setProperty('--main-option-text-and-border-color', colors.input_text_color);
        document.documentElement.style.setProperty('--links-checkbox-somebtns-color', colors.link_color);
        document.documentElement.style.setProperty('--primary-btn-bg-color', colors.buttonA_color);
        document.documentElement.style.setProperty('--primary-btn-font-color', colors.buttonA_text_color);
        document.documentElement.style.setProperty('--back-btns-bg-color', colors.buttonB_color);
        document.documentElement.style.setProperty('--back-btns-font-color', colors.buttonB_text_colot);
}