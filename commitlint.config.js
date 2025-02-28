module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
   * Customizing:
   * Removed 'sentence-case' from config-conventional
   */
  rules: {
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']]
  }
};
