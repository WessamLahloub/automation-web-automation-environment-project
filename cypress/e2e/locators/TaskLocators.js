
export default {


  //Register Locators
  FIRST_NAME: 'input[name="first_name"]',
  FIRST_NAME_AR: 'input[name="first_name_ar"]',
  LAST_NAME: 'input[name="last_name"]',
  LAST_NAME_AR: 'input[name="last_name_ar"]',
  EMAIL_REGISTER: "#registerEmailField",
  PASSWORD_REGISTER: 'input[name="password"]',
  BIRTH_DATE_DAY: "#id-birthdate_day",
  BIRTH_DATE_MONTH: "#id-birthdate_month",
  BIRTH_DATE_YEAR: "#id-birthdate_year",
  MOBILE_PHONE: ".phone_intl_input",
  STUDENT_ID_NUMBER: 'input[name="gen_field_1"]',
  COMMUNICATION_METHODE: '.select2-selection__rendered',
  TERMS: ".checkbox",
  CREATE_ACCOUNT: ".large",


  //Login Locators
  EMAIL_LOGIN: 'input[name="email"]',
  PASSWORD_LOGIN: 'input[name="password"]',
  LOGIN_BUTTON: '#loginBtn',

  //Validations
  EMAIL_VALIDATION: '#err-email',

  //Search Job
  SEARCH_JOBS_TAB: '.tab3',
  SEARCH_JOBS_FIELD: '.keword-filter',
  FIND_JOBS_BUTTON: '.find-jobs--btn',
  CARD_JOB_NAME: '.job-card-top-info',

  //Logout Locators
  PROFILE_INFO: '#auth-container',
  LOGOUT_BUTTON: 'a[href="/app/control/byt_reg_manager?byt_reg_stage=6"]',
  LOGOUT_MESSAGE: '#content'
}
