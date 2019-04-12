// eslint-disable-next-line no-console
const log = () => console.log('Welcome to storybook!');

export default {
  name: 'welcome',

  props: {
    showApp: {
      type: Function,
      default: log,
    },
  },

  data() {
    return {
      main: {
        padding: 15,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
        backgroundColor: '#ffffff',
      },

      logo: {
        width: 200,
      },

      link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
      },

      code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
      },

      note: {
        opacity: 0.5,
      },
    };
  },

  template: `
  
      <div>
          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

          <!-- Optional theme -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

          <div class="container">
          <div class="row justify-content-md-center">
              <div class="col-md-10 my-4">
                  <div class="col-4 mx-auto">
                  <h1 class="text-center">Vue Kit</h1>
                  <div class="col-4 mx-auto">
                    <img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1280px-Vue.js_Logo_2.svg.png" class="svg" width="100" height="100">
                  </div>
                  </div>
                  <p class="small text-muted text-center">Il kit vue per la Pubblica Amministrazione</p>
                  <p>Vue Kit è un <b>set di componenti open-source per Vue</b> conforme alle Linee guida di design per i servizi digitali della PA, costruito sulle basi dello <a
                          href="https://github.com/italia/design-ui-kit"
                          target="_blank" rel="noopener noreferrer">UI Kit <i
                          class="it-external-link"></i></a> e della libreria <a
                          href="https://italia.github.io/bootstrap-italia/"
                          target="_blank" rel="noopener noreferrer">Bootstrap
                          Italia <i class="it-external-link"></i></a>. Per iniziare, è sufficiente installare il pacchetto <code>npm</code> attraverso il seguente comando:</p>
                  <p class="text-center"><code>npm install design-vue-kit --save</code></p>
                  <p>È necessario includere i file dei font attraverso un CSS separato, di cui si può trovare i sorgenti ed un esempio <a
                      href="https://github.com/italia/design-vue-kit/tree/master/assets">qui</a>.</p>
                  <p>È possibile contribuire al progetto con il proprio codice o attraverso la segnalazione di bug al <a
                          href="https://italia.github.io/bootstrap-italia/">repository
                          ufficiale</a> di Vue Kit o scrivendoci sul <a
                          href="https://developersitalia.slack.com/messages/C7VPAUVB3/"
                          target="_blank" rel="noopener noreferrer">canale dedicato <i
                          class="it-external-link"></i></a> su Slack.</p>
                  <p>Il codice sorgente è presente nella directory <code>stories</code> del progetto. Una <code>story</code> è un singolo stato di uno o più componenti UI. Per maggiori informazioni, puoi far riferimento all'ambiente usato per mostrare i componenti:: <a
                          href="https://storybook.js.org/">Storybook
                      </a>.
                  </p>
                  <p class="font-weight-bold small text-center">Attenzione: la libreria è ancora in fase di sviluppo e non contiene tutti i componenti disponibili nello UI Kit o in Bootstrap Italia.</p>
                  <p class="small">Il progetto è distribuito con licenza BSD-3 (consultabile nel file <a
                          href="https://github.com/italia/design-vue-kit/blob/master/LICENSE">LICENSE</a>), un modello ancora più permissivo della classica licenza GPL, in quanto consente di modificare e ridistribuire questo software secondo varie modalità, anche di tipo closed-source.</p>
              </div>
          </div>
        </div>
      </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};
