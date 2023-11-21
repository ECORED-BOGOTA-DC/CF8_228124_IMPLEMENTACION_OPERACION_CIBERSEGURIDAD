export default {
  global: {
    componenteFormativo:
      'Monitoreo y respuesta de incidentes de seguridad digital',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz fortalecerá su capacidad de asimilar y aplicar conceptos para la realización de actividades de monitoreo y respuesta de incidentes de la seguridad digital; igualmente, afianzará su capacidad de comprender los conceptos de análisis de <em>logs</em>, vulnerabilidades e incidentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitoreo y análisis de <em>logs</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de <em>logs</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características del monitoreo y análisis de <em>logs</em>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de SIEM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentos de SOC - <em>Security Operation Center</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos de los SOC',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Alcance',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de recopilación de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de <em>Information Gathering</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicación de <em>Information Gathering</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de vulnerabilidades técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Gestión de incidentes de seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estándares y <em>Frameworks</em>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características de la gestión de incidentes de seguridad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Aplicación de la gestión de incidentes de seguridad',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Monitoreo y análisis de <em>logs</em>',
      referencia:
        'Alonso, M. (2016). <em>Gestión de logs</em>. [Trabajo fin de máster, Universidad Internacional de La Rioja, Logroño]. Repositorio Institucional UNIR.',
      tipo: 'Trabajo de grado para máster',
      link:
        'https://reunir.unir.net/bitstream/handle/123456789/3618/ALONSO-ALEGRE%20DIEZ%2C%20MARIA%20BEGO%C3%91A.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: '2. Fundamentos de SIEM',
      referencia:
        'Avella, J., Calderón, L., y Mateus, C. (2015). <em>Guía metodológica para la gestión centralizada de registros de seguridad a través de un SIEM.</em>',
      tipo: 'Guía metodológica. Documento en línea',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/2847/1/GU%C3%8DA%20METODOL%C3%93GICA%20PARA%20LA%20GESTI%C3%93N%20CENTRALIZADA%20DE%20REGISTROS%20DE%20SEGURIDAD%20A%20TRAV%C3%89S%20DE%20UN%20SIEM.pdf',
    },
    {
      tema: '2. Fundamentos de SIEM',
      referencia: 'AT&T Cybersecurity. (2021). <em>Deployment guide</em>.',
      tipo: 'Guía de implementación. Documento en línea',
      link:
        'https://cybersecurity.att.com/documentation/resources/pdf/usm-appliance-deployment-guide.pdf',
    },
    {
      tema: '2. Fundamentos de SIEM',
      referencia:
        'López, J. (2017). <em>Análisis y gestión de vulnerabilidades de sistemas informáticos con software libre (AGVISL)</em>.',
      tipo: 'Documento en línea',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/72567/6/jlopezfernanTFG0118memoria.pdf',
    },
    {
      tema: '4. Técnicas de recopilación de información',
      referencia:
        'García, J. (2015). <em>Hacking ético: cacería de vulnerabilidades</em>.',
      tipo: 'Documento en línea',
      link:
        'https://owasp.org/www-pdf-archive/Hacking_Etico_Cacer%C3%ADa_de_Vulnerabilidades.pdf',
    },
    {
      tema: '4. Técnicas de recopilación de información',
      referencia:
        'Offensive Security. (2021). <em>Recopilación de información en Metasploit</em>.',
      tipo: 'Documento en línea',
      link:
        'https://www.offensive-security.com/metasploit-unleashed/information-gathering/',
    },
    {
      tema: '4. Técnicas de recopilación de información',
      referencia:
        'Kali Tools. (2021). <em>Listado de herramientas de Kali Linux. Kali</em>.',
      tipo: 'Web',
      link: 'https://tools.kali.org/tools-listing',
    },
    {
      tema: '5. Análisis de vulnerabilidades técnicas',
      referencia:
        'Owasp Foundation. (2017). <em>Los diez riesgos más críticos en aplicaciones web</em>. Owasp.',
      tipo: 'Otro',
      link: 'https://wiki.owasp.org/images/5/5e/OWASP-Top-10-2017-es.pdf',
    },
    {
      tema: '5. Análisis de vulnerabilidades técnicas',
      referencia:
        'Scarfone, K., Souppaya, M., Cody, A., y Orebaugh, A. (2008). <em>Technical Guide to Information Security Testing and Assessment</em>.',
      tipo: 'Documento en línea',
      link:
        'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf ',
    },
    {
      tema: '5. Análisis de vulnerabilidades técnicas',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2016). <em>Guía metodológica de pruebas de efectividad</em>.',
      tipo: 'Documento en línea',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf ',
    },
    {
      tema: '5. Análisis de vulnerabilidades técnicas',
      referencia:
        'Owasp Foundation. (2021). Vulnerability scanning tools. Owasp.',
      tipo: 'Página Web',
      link: 'https://owasp.org/www-community/Vulnerability_Scanning_Tools',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'toda aquella acción o serie de acciones que aprovechan las vulnerabilidades para romper la seguridad de los sistemas.',
    },
    {
      termino: 'Activo de información',
      significado:
        'elemento que tiene valor para un individuo, organizaciones o gobiernos. Es un componente el cual almacena, trata, muestra o transporta datos e información, pudiendo ser físicos o digitales, por ejemplo, una base de datos, software, sistemas de información, papel, discos duros, personas, procesos, etc.',
    },
    {
      termino: 'Evento de seguridad digital',
      significado:
        'suceso que indica una posible violación de la seguridad digital o falla de los controles, lo cual suponen un potencial incidente de seguridad digital.',
    },
    {
      termino: 'Escáner de vulnerabilidades',
      significado:
        'herramienta <em>software</em> que busca y analiza las debilidades o fallas de los elementos o dispositivos que componen una red.',
    },
    {
      termino: 'Equipo de respuesta a incidentes',
      significado:
        'equipo de una organización con miembros debidamente capacitados y confiables que se encarga de darle el manejo apropiado a los incidentes durante su ciclo de vida. Los equipos de respuesta a incidentes se conocen como equipo de respuesta a incidentes de seguridad de la información ISIRT, del inglés <em>Information Security Incident Response Team</em>. Su función básica está orientada a detectar y responder frente a incidentes de seguridad de la información o seguridad digital, con el propósito de proteger y recuperar los sistemas de información; aplicaciones, programas en red, servidores, etc.',
    },
    {
      termino: 'Incidente de seguridad digital',
      significado:
        'uno o una serie de eventos de seguridad digital relacionados e identificados que pueden afectar los componentes y servicios tecnológicos de una organización, impactando de manera adversa con las operaciones de negocio.',
    },
    {
      termino: 'Investigación de seguridad digital',
      significado:
        'desarrollo de actividades de revisión, examen e indagación para el análisis e interpretación de uno o serie de sucesos para ayudar a comprender un incidente de seguridad digital.',
    },
    {
      termino: '<em>Log</em>',
      significado:
        'en español registro, consiste en un archivo plano de texto en el cual se encuentran cronológicamente los eventos, sucesos y cambios que han ocurrido en un sistema informático, tales como aplicaciones, servidores, servicios de red, etc.',
    },
    {
      termino: 'Usuarios',
      significado:
        'personas, procesos de una organización u organizaciones que hacen uso de servicios tecnológicos que son supervisados y monitoreados por un equipo de respuesta a incidentes.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'en informática, se define como una debilidad o fallo de seguridad que se presenta en un sistema de información, que puede estar compuesto por <em>software, hardware</em> y otros componentes y servicios tecnológicos, generando riesgos de seguridad de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Avella, J., Calderón, L., y Mateus, C. (2015). <em>Guía metodológica para la gestión centralizada de registros de seguridad a través de un SIEM.</em>',
      link:
        'https://repository.ucatolica.edu.co/server/api/core/bitstreams/f233d3b4-04cb-4ba5-a9cd-26412e0f2b87/content',
    },
    {
      referencia:
        'Offensive Security. (2021). <em>Recopilación de información en Metasploit.</em>',
      link:
        'https://www.offensive-security.com/metasploit-unleashed/information-gathering/',
    },
    {
      referencia: 'Oracle (2021). <em>¿Qué es un SOC?</em> Oracle.',
      link: 'https://www.oracle.com/es/database/security/que-es-un-soc.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Patiño Cerón ',
          cargo: 'Experto temático ',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Tolima - Centro agropecuario La Granja',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información- Regional Distrito Capital ',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información- Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
