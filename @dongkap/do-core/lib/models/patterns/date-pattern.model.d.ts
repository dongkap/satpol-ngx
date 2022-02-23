export declare enum DatePattern {
    SLASH = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
    SLASH_DDMMYYYY = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4})$",
    SLASH_YYYYMMDD = "^((?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:(?:0[13578]|1[02])(\\/)31)|((0[1,3-9]|1[0-2])(\\/)(29|30))))$|^(?:(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\\/)02(\\/)29)$|^(?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:0[1-9]|1\\d|2[0-8])$",
    DASH = "^((?:(?:31(-)(?:0[13578]|1[02]))|((29|30)(-)(0[1,3-9]|1[0-2])))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(-)02(-)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(-)(?:(?:0[1-9])|(?:1[0-2]))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
    DOT = "^((?:(?:31(\\.)(?:0[13578]|1[02]))|((29|30)(\\.)(0[1,3-9]|1[0-2])))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\.)02(\\.)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\.)(?:(?:0[1-9])|(?:1[0-2]))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$"
}
export declare enum DateFormat {
    DATE = "dd/MM/yyyy",
    DATETIME = "dd/MM/yyyy HH:mm:ss.S"
}
/**
 * https://stackoverflow.com/a/52478926
 * original regex yyyy/MM/dd or yy/MM/dd
 * ^((?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:(?:0[13578]|1[02])(\/)31)|((0[1,3-9]|1[0-2])(\/)(29|30))))$|
 * ^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/)02(\/)29)$|
 * ^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])$
 * original regex dd/MM/yyyy or dd/MM/yy
 * ^((?:(?:31(\/)(?:0[13578]|1[02]))|((29|30)(\/)(0[1,3-9]|1[0-2])))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2}))$|
 * ^(?:29(\/)02(\/)(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|
 * ^(?:0[1-9]|1\d|2[0-8])(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2})$
 */
