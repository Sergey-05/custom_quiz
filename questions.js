const questions = [
  {
    "question": "Развитием и поддержкой ОС Android, главным образом, занимается компания:",
    "answers": [
      {
        "text": "Android",
        "correct": false
      },
      {
        "text": "Apple",
        "correct": false
      },
      {
        "text": " Google",
        "correct": true
      },
      {
        "text": "Microsoft",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью был создан Open Handset Alliance?",
    "answers": [
      {
        "text": "рекламировать смартфоны под управлением Android",
        "correct": false
      },
      {
        "text": " разрабатывать открытые стандарты для мобильных устройств",
        "correct": true
      },
      {
        "text": "писать историю развития ОС Android",
        "correct": false
      },
      {
        "text": "продавать смартфоны под управлением Android",
        "correct": false
      }
    ]
  },
  {
    "question": "Ядро какой операционной системы использовалось в качестве базы для ОС Android?",
    "answers": [
      {
        "text": " Linux",
        "correct": true
      },
      {
        "text": "Windows",
        "correct": false
      },
      {
        "text": "Mac OS",
        "correct": false
      },
      {
        "text": "OS/2",
        "correct": false
      }
    ]
  },
  {
    "question": "Какое название получила версия Android 4.4?",
    "answers": [
      {
        "text": "kitekat",
        "correct": false
      },
      {
        "text": "Krispy Kreme",
        "correct": false
      },
      {
        "text": "kream-karamel",
        "correct": false
      },
      {
        "text": " Kit Kat",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой элемент в архитектуре Android служит уровнем абстракции между аппаратным обеспечением и программным стеком?",
    "answers": [
      {
        "text": "Applications",
        "correct": false
      },
      {
        "text": "Application Framework",
        "correct": false
      },
      {
        "text": "Libraries & Android Runtime",
        "correct": false
      },
      {
        "text": " Linux Kernel",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой движок баз данных используется в ОС Android?",
    "answers": [
      {
        "text": "DBM",
        "correct": false
      },
      {
        "text": " SQLite",
        "correct": true
      },
      {
        "text": "InnoDB",
        "correct": false
      },
      {
        "text": "MyISAM",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая графическая библиотека входит в набор библиотек ОС Android?",
    "answers": [
      {
        "text": "DirectX",
        "correct": false
      },
      {
        "text": "OpenCL",
        "correct": false
      },
      {
        "text": "OpenCV",
        "correct": false
      },
      {
        "text": " Open GL",
        "correct": true
      }
    ]
  },
  {
    "question": "В какой формат компилируются Java-классы для исполнения на виртуальной машине Dalvik?",
    "answers": [
      {
        "text": ".class",
        "correct": false
      },
      {
        "text": ".jar",
        "correct": false
      },
      {
        "text": " .dex",
        "correct": true
      },
      {
        "text": ".apk",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой компонент архитектуры Android позволяет любому приложению использовать уже реализованные возможности других приложений, к которым разрешен доступ?",
    "answers": [
      {
        "text": "Applications",
        "correct": false
      },
      {
        "text": " Application Framework",
        "correct": true
      },
      {
        "text": "Libraries & Android Runtime",
        "correct": false
      },
      {
        "text": "Linux Kernel",
        "correct": false
      }
    ]
  },
  {
    "question": "Для пополнения коллекции приложений своего мобильного устройства пользователь может воспользоваться сервисом",
    "answers": [
      {
        "text": "Google Maps",
        "correct": false
      },
      {
        "text": "Android Play",
        "correct": false
      },
      {
        "text": "Google Market",
        "correct": false
      },
      {
        "text": " Google Play",
        "correct": true
      }
    ]
  },
  {
    "question": "Набор средств программирования, который содержит инструменты, необходимые для создания, компиляции и сборки мобильного приложения называется",
    "answers": [
      {
        "text": " Android SDK",
        "correct": true
      },
      {
        "text": "JDK",
        "correct": false
      },
      {
        "text": "Android NDK",
        "correct": false
      },
      {
        "text": "плагин ADT",
        "correct": false
      }
    ]
  },
  {
    "question": "Инструмент разработки, позволяющий адаптировать код С/С++ для работы на Android, это -",
    "answers": [
      {
        "text": "Intel* Software Manager",
        "correct": false
      },
      {
        "text": " Android NDK",
        "correct": true
      },
      {
        "text": "Google Android SDK (ADT Bundle)",
        "correct": false
      },
      {
        "text": "Marmalade SDK",
        "correct": false
      }
    ]
  },
  {
    "question": "Чем являются Eclipse и IDEA?",
    "answers": [
      {
        "text": "API (интерфейс прикладного программирования)",
        "correct": false
      },
      {
        "text": "SDK (набор средств разработки)",
        "correct": false
      },
      {
        "text": " IDE (интегрированная среда разработки)",
        "correct": true
      },
      {
        "text": "ADT (инструменты разработки под Android)",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью инструмент Intel* Hardware Accelerated Execution Manager (Intel* HAXM) используется в среде разработки Intel* Beacon Mountain?",
    "answers": [
      {
        "text": "для эффективного распараллеливания С++ мобильных приложений",
        "correct": false
      },
      {
        "text": " для ускорения работы эмулятора в среде разработки",
        "correct": true
      },
      {
        "text": "для оптимизированной обработки данных и изображений",
        "correct": false
      },
      {
        "text": "для оптимизации загрузки системы при использовании процедур OpenGL",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью инструмент Intel* Threading Building Blocks (Intel* TBB) используется в среде разработки Intel* Beacon Mountain?",
    "answers": [
      {
        "text": "для ускорения работы эмулятора в среде разработки",
        "correct": false
      },
      {
        "text": "для оптимизированной обработки данных и изображений",
        "correct": false
      },
      {
        "text": " позволить разработчикам эффективно распараллелить С++ мобильные приложения",
        "correct": true
      },
      {
        "text": "позволить разработчикам оптимизировать загруженность системы при использовании процедур OpenGL",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью инструмент Intel* Integrated Performance Primitives (Intel* IPP) используется в среде разработки Intel* Beacon Mountain?",
    "answers": [
      {
        "text": " для оптимизированной обработки данных и изображений",
        "correct": true
      },
      {
        "text": "позволить разработчикам оптимизировать загруженность системы при использовании процедур OpenGL",
        "correct": false
      },
      {
        "text": "для ускорения работы эмулятора в среде разработки",
        "correct": false
      },
      {
        "text": "позволить разработчикам эффективно распараллелить С++ мобильные приложения",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью инструмент Intel* Graphics Performance Analyzers (Intel* GPA) System Analyzer используется в среде разработки Intel* Beacon Mountain?",
    "answers": [
      {
        "text": "для оптимизированной обработки данных и изображений",
        "correct": false
      },
      {
        "text": " позволить разработчикам оптимизировать загруженность системы при использовании процедур OpenGL",
        "correct": true
      },
      {
        "text": "для ускорения работы эмулятора в среде разработки",
        "correct": false
      },
      {
        "text": "позволить разработчикам эффективно распараллелить С++ мобильные приложения",
        "correct": false
      }
    ]
  },
  {
    "question": "К проблемам разработки под ОС Android можно отнести:",
    "answers": [
      {
        "text": " большое разнообразие устройств, невозможность проверки приложения на всех",
        "correct": true
      },
      {
        "text": "ненадежную изоляцию ядра системы от выполняемых приложений",
        "correct": false
      },
      {
        "text": "отсутствие эффективных инструментов разработки",
        "correct": false
      },
      {
        "text": "все варианты ответа верны",
        "correct": false
      }
    ]
  },
  {
    "question": "Приложения, не имеющие GUI и выполняющиеся в фоновом режиме - это",
    "answers": [
      {
        "text": "Intents",
        "correct": false
      },
      {
        "text": " Services",
        "correct": true
      },
      {
        "text": "Activities",
        "correct": false
      },
      {
        "text": "Content Providers",
        "correct": false
      }
    ]
  },
  {
    "question": "К преимуществам среды разработки Intel XDK можно отнести:",
    "answers": [
      {
        "text": "легкость разработки кроссплатформенных приложений",
        "correct": false
      },
      {
        "text": "наличие собственного эффективного эмулятора",
        "correct": false
      },
      {
        "text": "наличие облачного хранилища для разработанных приложений",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Среда разработки Intel XDK поддерживает следующие языки программирования:",
    "answers": [
      {
        "text": " JavaScript",
        "correct": true
      },
      {
        "text": "Java",
        "correct": false
      },
      {
        "text": "C#",
        "correct": false
      },
      {
        "text": "C++",
        "correct": false
      }
    ]
  },
  {
    "question": "Эмулятор среды разработки Intel XDK:",
    "answers": [
      {
        "text": "позволяет проверить работу приложений, использующих акселерометр",
        "correct": false
      },
      {
        "text": "не требует больших системных ресурсов",
        "correct": false
      },
      {
        "text": "позволяет моделировать исполнение приложение на ряде устройств",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Удобное средство обмена между двумя NFC-устройствами:",
    "answers": [
      {
        "text": " AndroidBeam",
        "correct": true
      },
      {
        "text": "Bluetooth",
        "correct": false
      },
      {
        "text": "Wi-Fi Direct",
        "correct": false
      },
      {
        "text": "Dalvik",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотеки, реализованные на базе PacketVideo OpenCORE:",
    "answers": [
      {
        "text": "FreeType",
        "correct": false
      },
      {
        "text": "SQLite",
        "correct": false
      },
      {
        "text": " Media Framework",
        "correct": true
      },
      {
        "text": "D библиотеки",
        "correct": false
      }
    ]
  },
  {
    "question": "Преимуществом эмуляторов является:",
    "answers": [
      {
        "text": "необходимость дополнительных системных ресурсов",
        "correct": false
      },
      {
        "text": "медленный запуск",
        "correct": false
      },
      {
        "text": " низкая стоимость",
        "correct": true
      },
      {
        "text": "невозможность полноценной отладки",
        "correct": false
      }
    ]
  },
  {
    "question": "Для запуска приложений, разработанных в Android IDE, необходимо:",
    "answers": [
      {
        "text": " настроить устройство (включить режим отладки по USB)",
        "correct": true
      },
      {
        "text": " настроить компьютер (для Windows необходимо установить нужный драйвер вручную, нужны права администратора)",
        "correct": true
      },
      {
        "text": " настроить среду и запустить проект на устройстве",
        "correct": true
      },
      {
        "text": "запустить виртуальную машину с установленной ОС Android",
        "correct": false
      }
    ]
  },
  {
    "question": "Не является средством разработки под Android:",
    "answers": [
      {
        "text": "SDK Manager",
        "correct": false
      },
      {
        "text": "Device Monitor",
        "correct": false
      },
      {
        "text": "AVD Manager",
        "correct": false
      },
      {
        "text": " ProGuard",
        "correct": true
      }
    ]
  },
  {
    "question": "Intel XDK поддерживает разработку под:",
    "answers": [
      {
        "text": " Android, Apple iOS, Microsoft Windows 8, Tizen",
        "correct": true
      },
      {
        "text": "MtkOS, Symbian OS, Microsoft Windows 8",
        "correct": false
      },
      {
        "text": "Apple iOS, BlackBerry OS",
        "correct": false
      },
      {
        "text": "JavaFX Mobile",
        "correct": false
      }
    ]
  },
  {
    "question": "В Intel XDK ведется разработка мобильных приложений с использованием:",
    "answers": [
      {
        "text": "Tizen",
        "correct": false
      },
      {
        "text": "C++",
        "correct": false
      },
      {
        "text": "Java",
        "correct": false
      },
      {
        "text": " HTML5",
        "correct": true
      }
    ]
  },
  {
    "question": "Приложения переднего плана ...",
    "answers": [
      {
        "text": " выполняют свои функции только, когда видимы на экране, в противном же случае их выполнение приостанавливается",
        "correct": true
      },
      {
        "text": "выполняют свои функции и когда видимы на экране, и когда скрыты другими приложениями",
        "correct": false
      },
      {
        "text": "после настройки не предполагают взаимодействия с пользователем, большую часть времени находятся и работают в скрытом состоянии",
        "correct": false
      },
      {
        "text": "после запуска выходят на передний план и остаются видимыми пока не закончат свою работу",
        "correct": false
      }
    ]
  },
  {
    "question": "В каком файле находятся строковые ресурсы приложения?",
    "answers": [
      {
        "text": "activityfullscreen.xml",
        "correct": false
      },
      {
        "text": "AndroidManifest.xml",
        "correct": false
      },
      {
        "text": " strings.xml",
        "correct": true
      },
      {
        "text": "text.xml",
        "correct": false
      }
    ]
  },
  {
    "question": "Фоновые приложения ...",
    "answers": [
      {
        "text": "выполняют свои функции и когда видимы на экране, и когда скрыты другими приложениями",
        "correct": false
      },
      {
        "text": " после настройки не предполагают взаимодействия с пользователем, большую часть времени находятся и работают в скрытом состоянии",
        "correct": true
      },
      {
        "text": "большую часть времени работают в фоновом режиме, однако допускают взаимодействие с пользователем и после настройки",
        "correct": false
      },
      {
        "text": "небольшие приложения, отображаемые в виде графического объекта на рабочем столе",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая папка в структуре Android-приложения содержит файлы с исходным кодом на языке Java?",
    "answers": [
      {
        "text": " src",
        "correct": true
      },
      {
        "text": "gen",
        "correct": false
      },
      {
        "text": "res",
        "correct": false
      },
      {
        "text": "bin",
        "correct": false
      }
    ]
  },
  {
    "question": "Возможность реагировать на пользовательский ввод и при этом не терять работоспособности в фоновом режиме является характерной особенностью",
    "answers": [
      {
        "text": "фоновых приложений",
        "correct": false
      },
      {
        "text": "виджетов",
        "correct": false
      },
      {
        "text": "приложений переднего плана",
        "correct": false
      },
      {
        "text": " смешанных приложений",
        "correct": true
      }
    ]
  },
  {
    "question": "Что позволяет протестировать мобильное приложение, не загружая его на реальное устройство?",
    "answers": [
      {
        "text": "Java virtual machine (JVM)",
        "correct": false
      },
      {
        "text": "Dalvik virtual machine (DVM)",
        "correct": false
      },
      {
        "text": " Android virtual device (AVD)",
        "correct": true
      },
      {
        "text": "Android virtual machine (AVM)",
        "correct": false
      }
    ]
  },
  {
    "question": "Приложение какого вида имеет смысл использовать для отображения динамической информации, такой как заряд батареи, прогноз погоды, дата и время?",
    "answers": [
      {
        "text": " виджет",
        "correct": true
      },
      {
        "text": "фоновое приложение",
        "correct": false
      },
      {
        "text": "приложение переднего плана",
        "correct": false
      },
      {
        "text": "смешанное приложение",
        "correct": false
      }
    ]
  },
  {
    "question": "Полный иерархический список обязательных файлов и папок проекта можно увидеть на вкладке …",
    "answers": [
      {
        "text": "Internet Explorer",
        "correct": false
      },
      {
        "text": " Package Explorer",
        "correct": true
      },
      {
        "text": "Navigator",
        "correct": false
      },
      {
        "text": " Project Explorer",
        "correct": true
      }
    ]
  },
  {
    "question": "Выберите верные утверждения",
    "answers": [
      {
        "text": " операционная система Android является многопользовательской ОС, в которой каждое приложение рассматривается как отдельный пользователь",
        "correct": true
      },
      {
        "text": "по умолчанию, система назначает каждому приложению уникальный пользовательский ID, который используется приложением по его усмотрению",
        "correct": false
      },
      {
        "text": " каждому приложению соответствует отдельный Linux процесс, который запускается как только это необходимо хотя бы одному компоненту приложения",
        "correct": true
      },
      {
        "text": "доступ к элементам приложения предоставляется любому другому приложению",
        "correct": false
      },
      {
        "text": " каждому процессу соответствует отдельный экземпляр виртуальной машины Dalvik",
        "correct": true
      }
    ]
  },
  {
    "question": "В какой папке должны находиться все ресурсы приложения?",
    "answers": [
      {
        "text": "src",
        "correct": false
      },
      {
        "text": "images",
        "correct": false
      },
      {
        "text": " res",
        "correct": true
      },
      {
        "text": "import",
        "correct": false
      }
    ]
  },
  {
    "question": "Видимая часть Android-приложения (экран, окно, форма), отвечает за отображение графического интерфейса пользователя - это …",
    "answers": [
      {
        "text": " активность (Activity)",
        "correct": true
      },
      {
        "text": "сервис (Service)",
        "correct": false
      },
      {
        "text": "приемник широковещательных сообщений (Broadcast Receiver)",
        "correct": false
      },
      {
        "text": "контент-провайдер (Content Provider)",
        "correct": false
      }
    ]
  },
  {
    "question": "Что находится в папке gen?",
    "answers": [
      {
        "text": "изображения",
        "correct": false
      },
      {
        "text": "аудио файлы",
        "correct": false
      },
      {
        "text": "ресурсы приложения",
        "correct": false
      },
      {
        "text": " автоматически сгенерированные java-файлы",
        "correct": true
      }
    ]
  },
  {
    "question": "Компонент, который работает в фоновом режиме, выполняет длительные по времени операции или работу для удаленных процессов - это ...",
    "answers": [
      {
        "text": "активность (Activity)",
        "correct": false
      },
      {
        "text": " сервис (Service)",
        "correct": true
      },
      {
        "text": "приемник широковещательных сообщений (Broadcast Receiver)",
        "correct": false
      },
      {
        "text": "контент-провайдер (Content Provider)",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой компонент управляет распределенным множеством данных приложения?",
    "answers": [
      {
        "text": "активность (Activity)",
        "correct": false
      },
      {
        "text": "сервис (Service)",
        "correct": false
      },
      {
        "text": "приемник широковещательных сообщений (Broadcast Receiver)",
        "correct": false
      },
      {
        "text": " контент-провайдер (Content Provider)",
        "correct": true
      }
    ]
  },
  {
    "question": "Каждый приемник широковещательных сообщений является наследником класса ...",
    "answers": [
      {
        "text": " BroadcastReceiver",
        "correct": true
      },
      {
        "text": "ContentProvider",
        "correct": false
      },
      {
        "text": "IntentReceiver",
        "correct": false
      },
      {
        "text": "ViewReceiver",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой класс является основным строительным блоком для компонентов пользовательского интерфейса (UI), определяет прямоугольную область экрана и отвечает за прорисовку и обработку событий?",
    "answers": [
      {
        "text": "Widget",
        "correct": false
      },
      {
        "text": " View",
        "correct": true
      },
      {
        "text": "UIComponent",
        "correct": false
      },
      {
        "text": "GUI",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой язык разметки используется для описания иерархии компонентов графического пользовательского интерфейса Android-приложения?",
    "answers": [
      {
        "text": "html",
        "correct": false
      },
      {
        "text": "gml",
        "correct": false
      },
      {
        "text": "xhtml",
        "correct": false
      },
      {
        "text": " xml",
        "correct": true
      }
    ]
  },
  {
    "question": "Выберите верные утверждения относительно объекта-намерения (Intent).",
    "answers": [
      {
        "text": " используются для передачи сообщений между основными компонентами приложений",
        "correct": true
      },
      {
        "text": "используется для передачи сообщений пользователю",
        "correct": false
      },
      {
        "text": " представляет собой структуру данных, содержащую описание операции, которая должна быть выполнена, и обычно используется для запуска активности или сервиса",
        "correct": true
      },
      {
        "text": "используется для получения инструкций от пользователя",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая последовательность методов исполняется системой при возвращении невидимой активности на экран?",
    "answers": [
      {
        "text": " onRestart(), onStart(), onResume()",
        "correct": true
      },
      {
        "text": "onStart(), onResume()",
        "correct": false
      },
      {
        "text": "onCreate(), onStart(), onResume()",
        "correct": false
      },
      {
        "text": "onPause(), onRestart(), onStart()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой слушатель используется для отслеживания события касания экрана устройства?",
    "answers": [
      {
        "text": "OnClickListener",
        "correct": false
      },
      {
        "text": "OnInputListener",
        "correct": false
      },
      {
        "text": " OnTouchListener",
        "correct": true
      },
      {
        "text": "OnPressListener",
        "correct": false
      }
    ]
  },
  {
    "question": "Выберите верную последовательность действий, необходимых для создания в приложении контент-провайдера.",
    "answers": [
      {
        "text": " Проектирование способа хранения данных; Создание класса-наследника от класса ContentProvider; Определение строки авторизации провайдера, URI для его строк и имен столбцов",
        "correct": true
      },
      {
        "text": "Создание класса наследника от класса ContentProvider; Определение способа организации данных; Заполнение контент-провайдера данными",
        "correct": false
      },
      {
        "text": "Создание класса наследника от класса ContentProvider; Заполнение контент-провайдера данными; Определение способа работы с данными",
        "correct": false
      },
      {
        "text": "Проектирование способа хранения данных; Определение способа организации данных; Определение способа работы с данными",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод используется для рассылки объектов-намерений, получаемых приемниками широковещательных сообщений?",
    "answers": [
      {
        "text": " sendBroadcast()",
        "correct": true
      },
      {
        "text": "passBroadcast()",
        "correct": false
      },
      {
        "text": "takeBroadcast()",
        "correct": false
      },
      {
        "text": "carryBroadcast()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая информация не содержится в файле AndroidManifest.xml?",
    "answers": [
      {
        "text": "описание компонентов приложения: активностей, сервисов, приемников широковещательных сообщений и контент-провайдеров",
        "correct": false
      },
      {
        "text": "объявление полномочий, которыми должно обладать приложение",
        "correct": false
      },
      {
        "text": "определение минимального уровня Android API для приложения",
        "correct": false
      },
      {
        "text": " определение мест для ввода информации пользователем",
        "correct": true
      }
    ]
  },
  {
    "question": "какой метод вызывается системой в случае, когда активность теряет фокус?",
    "answers": [
      {
        "text": " onPause()",
        "correct": true
      },
      {
        "text": "onStop()",
        "correct": false
      },
      {
        "text": "onDestroy()",
        "correct": false
      },
      {
        "text": "onRestart()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой вид компоновки определяет табличный способ расположения компонентов графического интерфейса пользователя в приложениях под Android?",
    "answers": [
      {
        "text": "RowLayout",
        "correct": false
      },
      {
        "text": " TableLayout",
        "correct": true
      },
      {
        "text": "GridBagLayout",
        "correct": false
      },
      {
        "text": "GridLayout",
        "correct": false
      }
    ]
  },
  {
    "question": "Направленное широковещание работает следующим образом:",
    "answers": [
      {
        "text": "сообщения передаются в асинхронном режиме, все приемники срабатывают в неопределенном порядке, часто в одно и то же время",
        "correct": false
      },
      {
        "text": " сообщения передаются с помощью только одному приемнику в один момент времени, как только приемник сработает, он может передать сообщение следующему приемнику, а может прервать вещание так, что больше ни один приемник это сообщение не получит",
        "correct": true
      },
      {
        "text": "сообщения передаются только одному приемнику в один момент времени, но ни один приемник не может прервать широковещание",
        "correct": false
      },
      {
        "text": "сообщения передаются в асинхронном режиме, любой приемник, получивший сообщение может прервать вещание",
        "correct": false
      }
    ]
  },
  {
    "question": "Для чего используется папка res/value/?",
    "answers": [
      {
        "text": " содержит XML файлы, которые определяют простые значения, таких ресурсов как, строки, числа, цвета",
        "correct": true
      },
      {
        "text": "содержит XML файлы, которые компилируются в графические ресурсы",
        "correct": false
      },
      {
        "text": "содержит XML файлы, которые компилируются в числовые ресурсы",
        "correct": false
      },
      {
        "text": "содержит XML файлы, которые определяют компоновку элементов пользовательского интерфейса",
        "correct": false
      }
    ]
  },
  {
    "question": "Дизайн или проектирование интерфейса для графических дизайнеров:",
    "answers": [
      {
        "text": "тон, стиль, композиция, которые являются атрибутами бренда",
        "correct": false
      },
      {
        "text": "прозрачность и понятность информации",
        "correct": false
      },
      {
        "text": "передача информации о поведении посредством ожидаемого назначения",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Объектами информационного дизайна являются",
    "answers": [
      {
        "text": "всевозможные графики",
        "correct": false
      },
      {
        "text": "диаграммы",
        "correct": false
      },
      {
        "text": "инфографика",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Строительные блоки визуального дизайна интерфейсов:",
    "answers": [
      {
        "text": "форма",
        "correct": false
      },
      {
        "text": "размер",
        "correct": false
      },
      {
        "text": "цвет",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Более крупные элементы:",
    "answers": [
      {
        "text": " привлекают больше внимания",
        "correct": true
      },
      {
        "text": "привлекают меньше внимания",
        "correct": false
      },
      {
        "text": "размер не влияет на уровень внимания",
        "correct": false
      },
      {
        "text": "все варианты ответа верны",
        "correct": false
      }
    ]
  },
  {
    "question": "Следующие утверждения верны:",
    "answers": [
      {
        "text": "люди легко воспринимают контрастность",
        "correct": false
      },
      {
        "text": "восприятие направления затруднено при больших размерах объектов",
        "correct": false
      },
      {
        "text": "текстура бесполезна для передачи различий или привлечения внимания",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Расположение элементов мобильного приложения:",
    "answers": [
      {
        "text": "влияет на удобство использования",
        "correct": false
      },
      {
        "text": "полезно для передачи иерархии",
        "correct": false
      },
      {
        "text": "полезно для создания пространственных отношений между объектами на экране и объектами реального мира",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Выделяют следующие категории элементов управления:",
    "answers": [
      {
        "text": " командные элементы управления",
        "correct": true
      },
      {
        "text": "системные элементы управления",
        "correct": false
      },
      {
        "text": "элементы управления интерфейсами",
        "correct": false
      },
      {
        "text": "все варианты ответа верны",
        "correct": false
      }
    ]
  },
  {
    "question": "Текстовые гиперссылки при программировании для мобильных устройств:",
    "answers": [
      {
        "text": "стоит использовать повсеместно",
        "correct": false
      },
      {
        "text": " стоит использовать в исключительных случаях",
        "correct": true
      },
      {
        "text": "стоит использовать для перехода между окнами приложения",
        "correct": false
      },
      {
        "text": "все варианты ответа неверны",
        "correct": false
      }
    ]
  },
  {
    "question": "Элементы управления \"Радиокнопки\":",
    "answers": [
      {
        "text": " должны иметь круглую форму",
        "correct": true
      },
      {
        "text": "должны иметь квадратную форму",
        "correct": false
      },
      {
        "text": "могут иметь любую форму",
        "correct": false
      },
      {
        "text": "не должны иметь круглую форму",
        "correct": false
      }
    ]
  },
  {
    "question": "В чем заключается суть структурных шаблонов проектирования?",
    "answers": [
      {
        "text": "определяют тип продукта в отношении к пользователю",
        "correct": false
      },
      {
        "text": "решают проблемы, относящиеся к взаимодействию с функциональными элементами",
        "correct": false
      },
      {
        "text": " решают проблемы, связанные с управлением отображением информации",
        "correct": true
      },
      {
        "text": "все перечисленные",
        "correct": false
      }
    ]
  },
  {
    "question": "Какое визуальное свойство является самым главным в определении сущности объекта?",
    "answers": [
      {
        "text": " форма",
        "correct": true
      },
      {
        "text": "размер",
        "correct": false
      },
      {
        "text": "яркость",
        "correct": false
      },
      {
        "text": "цвет",
        "correct": false
      }
    ]
  },
  {
    "question": "Какое средство организации интерфейса помогает визуально уравновесить элементы?",
    "answers": [
      {
        "text": "логический маршрут",
        "correct": false
      },
      {
        "text": " симметрия",
        "correct": true
      },
      {
        "text": "сетка",
        "correct": false
      },
      {
        "text": "выравнивание",
        "correct": false
      }
    ]
  },
  {
    "question": "При проектировании окон приложения необходимо:",
    "answers": [
      {
        "text": "для каждой функции делать отдельное диалоговое окно",
        "correct": false
      },
      {
        "text": " интегрировать в рабочее пространство инструменты, используемые наиболее часто",
        "correct": true
      },
      {
        "text": "позволять диалоговому окну оперировать только с одной функцией",
        "correct": false
      },
      {
        "text": "все вышеперечисленное",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие элементы управления применяются для действий по настройке?",
    "answers": [
      {
        "text": "командные элементы управления",
        "correct": false
      },
      {
        "text": " элементы выбора",
        "correct": true
      },
      {
        "text": "элементы ввода",
        "correct": false
      },
      {
        "text": "элементы отображения",
        "correct": false
      }
    ]
  },
  {
    "question": "При создании справочной системы необходимо:",
    "answers": [
      {
        "text": "учитывать, что она не должна становиться костылем для продукта",
        "correct": false
      },
      {
        "text": "использовать всплывающие подсказки",
        "correct": false
      },
      {
        "text": "создать руководство по ''быстрому старту''",
        "correct": false
      },
      {
        "text": " все вышеперечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Примерами комбо-элементов не являются:",
    "answers": [
      {
        "text": "комбо-кнопка",
        "correct": false
      },
      {
        "text": "комбо-список",
        "correct": false
      },
      {
        "text": " комбо-поле",
        "correct": true
      },
      {
        "text": "все вышеперечисленное",
        "correct": false
      }
    ]
  },
  {
    "question": "К элементам ввода относят:",
    "answers": [
      {
        "text": "ограничивающие элементы ввода",
        "correct": false
      },
      {
        "text": "счетчики",
        "correct": false
      },
      {
        "text": "ползунки",
        "correct": false
      },
      {
        "text": " все вышеперечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "К элементам управления отображением не относятся:",
    "answers": [
      {
        "text": "разделители",
        "correct": false
      },
      {
        "text": "полосы прокрутки",
        "correct": false
      },
      {
        "text": " рукоятки",
        "correct": true
      },
      {
        "text": "сетки и рамки",
        "correct": false
      }
    ]
  },
  {
    "question": "Следующие утверждения не верны:",
    "answers": [
      {
        "text": "если объекты похожи, они должны выполнять сходные действия",
        "correct": false
      },
      {
        "text": "картинки работают быстрее, чем слова",
        "correct": false
      },
      {
        "text": " не используйте интерфейсные элементы",
        "correct": true
      },
      {
        "text": "на любом шаге должна быть возможность вернуться назад",
        "correct": false
      }
    ]
  },
  {
    "question": "Нижняя панель (Navigation Bar) предназначена",
    "answers": [
      {
        "text": " для навигации на тех устройствах, которые не имеют аппаратных навигационных клавиш",
        "correct": true
      },
      {
        "text": "для вывода времени",
        "correct": false
      },
      {
        "text": "для вывода уровня заряда батареи",
        "correct": false
      },
      {
        "text": "для вывода уровня сигнала сотовой сети",
        "correct": false
      }
    ]
  },
  {
    "question": "К традиционным типографическим инструментам не относят",
    "answers": [
      {
        "text": "масштаб",
        "correct": false
      },
      {
        "text": " цвет",
        "correct": true
      },
      {
        "text": "разреженность",
        "correct": false
      },
      {
        "text": "выравнивание по сетке",
        "correct": false
      }
    ]
  },
  {
    "question": "Выделяют следующие категории плотности экрана для Android-устройств:",
    "answers": [
      {
        "text": "LDPI, MDPI, HDPI",
        "correct": false
      },
      {
        "text": "HDPI, XHDPI, XXHDPI, и XXXHDPI",
        "correct": false
      },
      {
        "text": " LDPI, MDPI, HDPI, XHDPI, XXHDPI, и XXXHDPI",
        "correct": true
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "Расстояние между элементами управления рекомендуется делать кратным:",
    "answers": [
      {
        "text": "dp",
        "correct": false
      },
      {
        "text": " 8dp",
        "correct": true
      },
      {
        "text": "6dp",
        "correct": false
      },
      {
        "text": "4dp",
        "correct": false
      }
    ]
  },
  {
    "question": "Один DP равен:",
    "answers": [
      {
        "text": "00 dpi",
        "correct": false
      },
      {
        "text": ",5 дюйма",
        "correct": false
      },
      {
        "text": ",3 мм",
        "correct": false
      },
      {
        "text": " одному пикселю на экране типа MDPI",
        "correct": true
      }
    ]
  },
  {
    "question": "Минимальный размер элемента управления",
    "answers": [
      {
        "text": " 48dp",
        "correct": true
      },
      {
        "text": "4 dp",
        "correct": false
      },
      {
        "text": "0pt",
        "correct": false
      },
      {
        "text": "2px",
        "correct": false
      }
    ]
  },
  {
    "question": "Использование ярлычков для всех панелей сетки и полупрозрачных \"занавесок\" для неактивных панелей",
    "answers": [
      {
        "text": " помогает пользователю быстрее понять, что скрывается под той или иной панелью",
        "correct": true
      },
      {
        "text": "мешает пользователю понять, что скрывается под той или иной панелью",
        "correct": false
      },
      {
        "text": "скрывает от пользователя нужные панели",
        "correct": false
      },
      {
        "text": "нет правильного варианта ответа",
        "correct": false
      }
    ]
  },
  {
    "question": "Возможность прокрутки  сеток стоит осуществлять",
    "answers": [
      {
        "text": "только по вертикали",
        "correct": false
      },
      {
        "text": "только по горизонтали",
        "correct": false
      },
      {
        "text": "по горизонтали и по вертикали",
        "correct": false
      },
      {
        "text": " по горизонтали или по вертикали",
        "correct": true
      }
    ]
  },
  {
    "question": "Основные вкладки (FixedTabs) удобны при отображении",
    "answers": [
      {
        "text": " трех и менее вкладок",
        "correct": true
      },
      {
        "text": "трех и более вкладок",
        "correct": false
      },
      {
        "text": "от четырех вкладок",
        "correct": false
      },
      {
        "text": "двух вкладок",
        "correct": false
      }
    ]
  },
  {
    "question": "Элементы управления \"Флажки\" используются в том случае, если из предлагаемого списка",
    "answers": [
      {
        "text": " можно выбрать одновременно несколько вариантов",
        "correct": true
      },
      {
        "text": "можно выбрать только один вариант",
        "correct": false
      },
      {
        "text": "можно выбрать одновременно только 2 варианта",
        "correct": false
      },
      {
        "text": "нет правильного варианта ответа",
        "correct": false
      }
    ]
  },
  {
    "question": "В ОС Android существует диалоговые окна следующего вида:",
    "answers": [
      {
        "text": "класс Dialog и его производные",
        "correct": false
      },
      {
        "text": "уведомления",
        "correct": false
      },
      {
        "text": "всплывающие подсказки",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Уведомления стоит использовать, когда",
    "answers": [
      {
        "text": " сообщение является важным, однако не требует немедленного прочтения и ответа",
        "correct": true
      },
      {
        "text": "сообщение является важным и требует немедленного прочтения и ответа",
        "correct": false
      },
      {
        "text": "сообщение является важным, однако требует немедленного прочтения, но не ответа",
        "correct": false
      },
      {
        "text": "сообщение не требует ответа пользователя, но важно для продолжения его работы",
        "correct": false
      }
    ]
  },
  {
    "question": "Всплывающие подсказки стоит использовать, когда",
    "answers": [
      {
        "text": "сообщение является важным, однако не требует немедленного прочтения и ответа",
        "correct": false
      },
      {
        "text": "сообщение является важным и требует немедленного прочтения и ответа",
        "correct": false
      },
      {
        "text": "сообщение является важным, однако требует немедленного прочтения, но не ответа",
        "correct": false
      },
      {
        "text": " сообщение не требует ответа пользователя, но важно для продолжения его работы",
        "correct": true
      }
    ]
  },
  {
    "question": "AlertDialog это:",
    "answers": [
      {
        "text": " диалоговое окно, которое может содержать заголовок, до трех кнопок, список выбираемых значений или настраиваемое содержимое",
        "correct": true
      },
      {
        "text": "диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату или время",
        "correct": false
      },
      {
        "text": "диалоговое окно, содержащее линейку процесса выполнения какого-то действия",
        "correct": false
      },
      {
        "text": "контейнер для создания собственных диалоговых окон",
        "correct": false
      }
    ]
  },
  {
    "question": "DatePickerDialog это:",
    "answers": [
      {
        "text": "диалоговое окно, которое может содержать заголовок, до трех кнопок, список выбираемых значений или настраиваемое содержимое",
        "correct": false
      },
      {
        "text": " диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату",
        "correct": true
      },
      {
        "text": "диалоговое окно, содержащее линейку процесса выполнения какого-то действия",
        "correct": false
      },
      {
        "text": "диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату и время",
        "correct": false
      }
    ]
  },
  {
    "question": "ProgressDialog это:",
    "answers": [
      {
        "text": "диалоговое окно, которое может содержать заголовок, до трех кнопок, список выбираемых значений или настраиваемое содержимое",
        "correct": false
      },
      {
        "text": "диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату или время",
        "correct": false
      },
      {
        "text": " диалоговое окно, содержащее линейку процесса выполнения какого-то действия",
        "correct": true
      },
      {
        "text": "контейнер для создания собственных диалоговых окон",
        "correct": false
      }
    ]
  },
  {
    "question": "DialogFragment это:",
    "answers": [
      {
        "text": "диалоговое окно, которое может содержать заголовок, до трех кнопок, список выбираемых значений или настраиваемое содержимое",
        "correct": false
      },
      {
        "text": "диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату или время",
        "correct": false
      },
      {
        "text": "диалоговое окно, содержащее линейку процесса выполнения какого-то действия",
        "correct": false
      },
      {
        "text": " контейнер для создания собственных диалоговых окон",
        "correct": true
      }
    ]
  },
  {
    "question": "Любое диалоговое окно всегда содержит:",
    "answers": [
      {
        "text": "заголовок",
        "correct": false
      },
      {
        "text": "управляющие кнопки",
        "correct": false
      },
      {
        "text": " содержательную часть",
        "correct": true
      },
      {
        "text": "все вышеперечисленное",
        "correct": false
      }
    ]
  },
  {
    "question": "Максимально возможное число управляющих кнопок диалогового окна равно:",
    "answers": [
      {
        "text": "одной",
        "correct": false
      },
      {
        "text": "двум",
        "correct": false
      },
      {
        "text": " трем",
        "correct": true
      },
      {
        "text": "неограничено",
        "correct": false
      }
    ]
  },
  {
    "question": "Высота уведомления в нормальном режиме составляет",
    "answers": [
      {
        "text": "2 dp.",
        "correct": false
      },
      {
        "text": " 64 dp.",
        "correct": true
      },
      {
        "text": "28 dp.",
        "correct": false
      },
      {
        "text": "56 dp.",
        "correct": false
      }
    ]
  },
  {
    "question": "Стандартный шаблон активности Fixed Tabs + Swipe:",
    "answers": [
      {
        "text": "поддерживается начиная с версии API 9;",
        "correct": false
      },
      {
        "text": "поддерживается в любой версии;",
        "correct": false
      },
      {
        "text": " поддерживается начиная с версии API 11;",
        "correct": true
      },
      {
        "text": "поддерживается начиная с версии API 14",
        "correct": false
      }
    ]
  },
  {
    "question": "При загрузке приложения первой появляется активность,",
    "answers": [
      {
        "text": " чье описание находится первым в манифесте",
        "correct": true
      },
      {
        "text": "чье описание находится последним в манифесте",
        "correct": false
      },
      {
        "text": "чье описание первым в лексикографическим порядке",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "Разместить на активности больше элементов, чем одновременно помещается на экран мобильного устройства",
    "answers": [
      {
        "text": "невозможно",
        "correct": false
      },
      {
        "text": " возможно, если отображать по очереди несколько экранов приложения",
        "correct": true
      },
      {
        "text": "возможно только для определенных элементов",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствуют",
        "correct": false
      }
    ]
  },
  {
    "question": "Переключения между активностями осуществляются",
    "answers": [
      {
        "text": "только при помощи кнопок",
        "correct": false
      },
      {
        "text": "только с использованием сенсорного экрана смартфона",
        "correct": false
      },
      {
        "text": "только при помощи кнопок и других элементов управления",
        "correct": false
      },
      {
        "text": " все три варианта возможны",
        "correct": true
      }
    ]
  },
  {
    "question": "Для чего предназначен класс ListActivity?",
    "answers": [
      {
        "text": "для создания обычной активности",
        "correct": false
      },
      {
        "text": "для создания нового листа",
        "correct": false
      },
      {
        "text": " для создания активности, основным элементом которой является список",
        "correct": true
      },
      {
        "text": "для создания активности, основным элементом которой является таблица",
        "correct": false
      }
    ]
  },
  {
    "question": "Интерфейс Adapter позволяет:",
    "answers": [
      {
        "text": " связывать список и названия его элементов",
        "correct": true
      },
      {
        "text": "обрабатывать нажатия",
        "correct": false
      },
      {
        "text": "адаптировать приложение к любой версии Android SDK",
        "correct": false
      },
      {
        "text": "оптимизировать процесс зарядки телефона",
        "correct": false
      }
    ]
  },
  {
    "question": "Диалоговое окно, которое может содержать заголовок, до трех кнопок, список выбираемых значений или настраиваемое содержимое - это",
    "answers": [
      {
        "text": "DialogFragment",
        "correct": false
      },
      {
        "text": " AlertDialog",
        "correct": true
      },
      {
        "text": "DatePickerDialog",
        "correct": false
      },
      {
        "text": "ProgressDialog",
        "correct": false
      }
    ]
  },
  {
    "question": "Диалоговое окно с предопределенным интерфейсом, позволяющее выбрать дату или время -",
    "answers": [
      {
        "text": "AlertDialog",
        "correct": false
      },
      {
        "text": "ProgressDialog",
        "correct": false
      },
      {
        "text": "DialogFragment",
        "correct": false
      },
      {
        "text": " DatePickerDialog",
        "correct": true
      }
    ]
  },
  {
    "question": "Диалоговое окно, содержащее линейку процесса выполнения какого-то действия - это",
    "answers": [
      {
        "text": " ProgressDialog",
        "correct": true
      },
      {
        "text": "AlertDialog",
        "correct": false
      },
      {
        "text": "DialogFragment",
        "correct": false
      },
      {
        "text": "DatePickerDialog",
        "correct": false
      }
    ]
  },
  {
    "question": "Что необходимо сделать при добавлении в проект новой активности?",
    "answers": [
      {
        "text": "создать новый проект",
        "correct": false
      },
      {
        "text": " прописать в манифесте информацию о новой активности",
        "correct": true
      },
      {
        "text": "запустить эмулятор",
        "correct": false
      },
      {
        "text": "скачать и установить специальный инструмент MultiActivity SDK",
        "correct": false
      }
    ]
  },
  {
    "question": "Для создания собственных диалоговых окон используют контейнер:",
    "answers": [
      {
        "text": " DialogFragment",
        "correct": true
      },
      {
        "text": "AlertDialog",
        "correct": false
      },
      {
        "text": "ProgressDialog",
        "correct": false
      },
      {
        "text": "DatePickerDialog",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод запускает новую активность?",
    "answers": [
      {
        "text": "newActivity()",
        "correct": false
      },
      {
        "text": " startActivity()",
        "correct": true
      },
      {
        "text": "intentActivity()",
        "correct": false
      },
      {
        "text": "beginActivity()",
        "correct": false
      }
    ]
  },
  {
    "question": "Редактирование файла манифеста требуется:",
    "answers": [
      {
        "text": "при использовании диалоговых окон",
        "correct": false
      },
      {
        "text": " при создании новой активности",
        "correct": true
      },
      {
        "text": "при использовании всплывающих подсказок",
        "correct": false
      },
      {
        "text": "во всех перечисленных случаях",
        "correct": false
      }
    ]
  },
  {
    "question": "Можно ли создать диалоговое окно без управляющих кнопок?",
    "answers": [
      {
        "text": "нет, диалоговое окно должно содержать от одной до трех кнопок",
        "correct": false
      },
      {
        "text": "да, если у него отсутствует содержательная часть",
        "correct": false
      },
      {
        "text": " да, если элементы содержательной части являются кликабельными",
        "correct": true
      },
      {
        "text": "нет, ни в коем случае",
        "correct": false
      }
    ]
  },
  {
    "question": "Заголовок диалогового окна:",
    "answers": [
      {
        "text": "является обязательным элементом",
        "correct": false
      },
      {
        "text": "генерируется автоматически",
        "correct": false
      },
      {
        "text": "является необязательным элементом, если отсутствуют содержательная часть и управляющие кнопки",
        "correct": false
      },
      {
        "text": " является необязательным элементом",
        "correct": true
      }
    ]
  },
  {
    "question": "Заголовок диалогового окна:",
    "answers": [
      {
        "text": "является обязательным элементом",
        "correct": false
      },
      {
        "text": "генерируется автоматически",
        "correct": false
      },
      {
        "text": "является необязательным элементом, если отсутствуют содержательная часть и управляющие кнопки",
        "correct": false
      },
      {
        "text": " является необязательным элементом",
        "correct": true
      }
    ]
  },
  {
    "question": "Уведомление в расширенном виде может содержать (выберите все верные варианты ответа):",
    "answers": [
      {
        "text": "картинку любой высоты",
        "correct": false
      },
      {
        "text": " картинку до 256 dp высотой",
        "correct": true
      },
      {
        "text": "видеоролик",
        "correct": false
      },
      {
        "text": " блок текстовой информации",
        "correct": true
      }
    ]
  },
  {
    "question": "Где могут появляться всплывающие подсказки?",
    "answers": [
      {
        "text": " в любом месте экрана, определенном программистом заранее",
        "correct": true
      },
      {
        "text": "в любом месте экрана случайным образом",
        "correct": false
      },
      {
        "text": "только в нижней части экрана",
        "correct": false
      },
      {
        "text": "только рядом с панелью уведомлений",
        "correct": false
      }
    ]
  },
  {
    "question": "Что такое swipe?",
    "answers": [
      {
        "text": "шаблон взаимодействия активностей между собой",
        "correct": false
      },
      {
        "text": "экранная клавиатура",
        "correct": false
      },
      {
        "text": "способ переключения между разными активностями",
        "correct": false
      },
      {
        "text": " способ поочередного отображения нескольких экранов, использующий только одну активность",
        "correct": true
      }
    ]
  },
  {
    "question": "При использовании шаблона Fixed Tabs + Swipe необходимо:",
    "answers": [
      {
        "text": "описать в файле манифеста все экраны активности",
        "correct": false
      },
      {
        "text": " для каждого экрана сделать свой xml-файл",
        "correct": true
      },
      {
        "text": "создать единый xml-файл для всех активностей",
        "correct": false
      },
      {
        "text": "создание нескольких активностей",
        "correct": false
      }
    ]
  },
  {
    "question": "Шаблон Fixed Tabs + Swipe позволяет переключаться между вкладками:",
    "answers": [
      {
        "text": "только с помощью кнопок",
        "correct": false
      },
      {
        "text": "только с помощью перелистывания",
        "correct": false
      },
      {
        "text": " как с помощью кнопок, так и с помощью перелистывания",
        "correct": true
      },
      {
        "text": "не позволяет переключаться между вкладками",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая  константа не определена в классе MotionEvent, для обозначения сенсорных событий",
    "answers": [
      {
        "text": " ACTION_CLICK",
        "correct": true
      },
      {
        "text": "ACTION_DOWN",
        "correct": false
      },
      {
        "text": "ACTION_MOVE",
        "correct": false
      },
      {
        "text": "ACTION_UP",
        "correct": false
      }
    ]
  },
  {
    "question": "Какое приложение доступно на Android Virtual Device для создания собственных жестов?",
    "answers": [
      {
        "text": "GestureCreator",
        "correct": false
      },
      {
        "text": "GestureDeveloper",
        "correct": false
      },
      {
        "text": " GestureBuilder",
        "correct": true
      },
      {
        "text": "GestureDraw",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой класс используется для распознавания стандартных сенсорных жестов в Android?",
    "answers": [
      {
        "text": " GestureDetector",
        "correct": true
      },
      {
        "text": "GestureRecognizer",
        "correct": false
      },
      {
        "text": "GestureAnalyzer",
        "correct": false
      },
      {
        "text": "GestureMatcher",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой элемент графического интерфейса пользователя необходим для распознавания собственных сенсорных жестов?",
    "answers": [
      {
        "text": " GestureOverlayView",
        "correct": true
      },
      {
        "text": "GestureLayout",
        "correct": false
      },
      {
        "text": "GestureHelper",
        "correct": false
      },
      {
        "text": "GestureInput",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие источники аудио и видео поддерживает мультимедиа библиотека Android?",
    "answers": [
      {
        "text": "медиа файлы, сохраненные как ресурсы приложения (raw ресурсы)",
        "correct": false
      },
      {
        "text": "файлы, расположенные в файловой системе",
        "correct": false
      },
      {
        "text": "поток данных, получаемый через сетевое соединение",
        "correct": false
      },
      {
        "text": " все перечисленные источники",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие источники аудио и видео поддерживает мультимедиа библиотека Android?",
    "answers": [
      {
        "text": "медиа файлы, сохраненные как ресурсы приложения (raw ресурсы)",
        "correct": false
      },
      {
        "text": "файлы, расположенные в файловой системе",
        "correct": false
      },
      {
        "text": "поток данных, получаемый через сетевое соединение",
        "correct": false
      },
      {
        "text": " все перечисленные источники",
        "correct": true
      }
    ]
  },
  {
    "question": "Для решения каких задач в Android используется класс MediaPlayer?",
    "answers": [
      {
        "text": " воспроизведение аудио контента",
        "correct": true
      },
      {
        "text": "просмотр изображений",
        "correct": false
      },
      {
        "text": "создание фотоснимков",
        "correct": false
      },
      {
        "text": " воспроизведение видео контента",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой метод класса MediaPlayer запускает воспроизведение медиаконтента?",
    "answers": [
      {
        "text": "playback()",
        "correct": false
      },
      {
        "text": "create()",
        "correct": false
      },
      {
        "text": "begin()",
        "correct": false
      },
      {
        "text": " start()",
        "correct": true
      }
    ]
  },
  {
    "question": "С какой целью используется метод release() в классах MediaPlayer и MediaRecorder?",
    "answers": [
      {
        "text": " конец жизненного цикла объекта и освобождение ресурсов",
        "correct": true
      },
      {
        "text": "создание объекта и запуск его работы",
        "correct": false
      },
      {
        "text": "перевод объекта в ожидающее состояние",
        "correct": false
      },
      {
        "text": "обновление объекта и запуск его работы",
        "correct": false
      }
    ]
  },
  {
    "question": "Для решения каких задач в Android используется класс MediaRecorder?",
    "answers": [
      {
        "text": " запись аудио контента",
        "correct": true
      },
      {
        "text": "создание фотоснимков",
        "correct": false
      },
      {
        "text": " запись видео контента",
        "correct": true
      },
      {
        "text": "запись текстовой информации",
        "correct": false
      }
    ]
  },
  {
    "question": "Экземпляр какого класса используется в качестве параметра метода startActivity()?",
    "answers": [
      {
        "text": "Activity",
        "correct": false
      },
      {
        "text": "Layout",
        "correct": false
      },
      {
        "text": "Extend",
        "correct": false
      },
      {
        "text": " Intent",
        "correct": true
      }
    ]
  },
  {
    "question": "Задать источник медиа-информации для MediaPlayer можно с помощью метода",
    "answers": [
      {
        "text": "Source()",
        "correct": false
      },
      {
        "text": "setData()",
        "correct": false
      },
      {
        "text": "setSource()",
        "correct": false
      },
      {
        "text": " setDataSource()",
        "correct": true
      }
    ]
  },
  {
    "question": "Двойное касание (double touch) обычно используется для",
    "answers": [
      {
        "text": " увеличения масштаба",
        "correct": true
      },
      {
        "text": "перегруппировки данных",
        "correct": false
      },
      {
        "text": "запуска действия по умолчанию для выбранного элемента",
        "correct": false
      },
      {
        "text": "перемещения данных в контейнер",
        "correct": false
      }
    ]
  },
  {
    "question": "API для работы с жестами располагается в пакете",
    "answers": [
      {
        "text": " android.gesture",
        "correct": true
      },
      {
        "text": "android.gest",
        "correct": false
      },
      {
        "text": "android.gestureview",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "Тип намерения для запроса на выполнение фотоснимков",
    "answers": [
      {
        "text": " MediaStore.ACTION_IMAGE_CAPTURE",
        "correct": true
      },
      {
        "text": "MediaStore.ACTION_PHOTO_CAPTURE",
        "correct": false
      },
      {
        "text": "MediaStore.ACTION_IMAGE",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "Системы позиционирования смартфона могут включать",
    "answers": [
      {
        "text": "систему GPS",
        "correct": false
      },
      {
        "text": "систему ГЛОНАСС",
        "correct": false
      },
      {
        "text": "сигналы WiFi и Bluetooth",
        "correct": false
      },
      {
        "text": " все перечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Преимущества использования спутниковых систем глобального позиционирования (GPS)",
    "answers": [
      {
        "text": " дает более точные результаты",
        "correct": true
      },
      {
        "text": "отлично работает в помещениях",
        "correct": false
      },
      {
        "text": "мало расходует заряд батареи",
        "correct": false
      },
      {
        "text": "быстро определяет координаты",
        "correct": false
      }
    ]
  },
  {
    "question": "Google Maps Android API позволяет",
    "answers": [
      {
        "text": "отслеживать сенсорные жесты на карте",
        "correct": false
      },
      {
        "text": "добавлять маркеры, многоугольники и внешние прозрачные слои",
        "correct": false
      },
      {
        "text": "изменять представление отдельных участков карты",
        "correct": false
      },
      {
        "text": " все перечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Для интеграции Google Maps Android API в приложения",
    "answers": [
      {
        "text": "дополнительных операций проводить не требуется",
        "correct": false
      },
      {
        "text": " необходимо установить библиотеку Google Play services",
        "correct": true
      },
      {
        "text": "необходимо установить библиотеку Google Maps services",
        "correct": false
      },
      {
        "text": "интеграция невозможна",
        "correct": false
      }
    ]
  },
  {
    "question": "Сенсоры и датчики смартфона позволяют регистрировать",
    "answers": [
      {
        "text": "положение и перемещения устройства",
        "correct": false
      },
      {
        "text": "повороты устройства в трехмерном пространстве",
        "correct": false
      },
      {
        "text": "изменения параметров окружающей среды",
        "correct": false
      },
      {
        "text": " все перечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Класс SensorManager",
    "answers": [
      {
        "text": "создает экземпляр сервиса, связанного с сенсором",
        "correct": false
      },
      {
        "text": "предоставляет различные методы для доступа и составления списка сенсоров",
        "correct": false
      },
      {
        "text": "содержит константы для задания точности сенсора",
        "correct": false
      },
      {
        "text": " все перечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Класс SensorEvent предоставляет информацию",
    "answers": [
      {
        "text": "данные сенсора",
        "correct": false
      },
      {
        "text": "тип сенсора, породившего событие",
        "correct": false
      },
      {
        "text": "время появления события",
        "correct": false
      },
      {
        "text": " все перечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Аппаратно-реализованные датчики это",
    "answers": [
      {
        "text": " физические элементы, встроенные в мобильное устройство",
        "correct": true
      },
      {
        "text": "физические элементы, подключаемые к мобильному устройству",
        "correct": false
      },
      {
        "text": "физические элементы, получающие данные с одного или нескольких физических датчиков и вычисляющие значение, которое от них ожидается",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "К датчикам окружающей среды, встроенным в мобильное устройство относят",
    "answers": [
      {
        "text": " датчики освещенности",
        "correct": true
      },
      {
        "text": "датчики вектора вращения",
        "correct": false
      },
      {
        "text": "акселерометры",
        "correct": false
      },
      {
        "text": "гироскопы",
        "correct": false
      }
    ]
  },
  {
    "question": "Классы, предоставляющие приложениям доступ к геолокационным возможностям мобильного устройства, располагается в пакете",
    "answers": [
      {
        "text": "android.position",
        "correct": false
      },
      {
        "text": " android.location",
        "correct": true
      },
      {
        "text": "android.geolocation",
        "correct": false
      },
      {
        "text": "android.situation",
        "correct": false
      }
    ]
  },
  {
    "question": "Классы и интерфейсы для работы с сенсорами являются частью пакета",
    "answers": [
      {
        "text": "android.detectors",
        "correct": false
      },
      {
        "text": "android.sensors",
        "correct": false
      },
      {
        "text": " android.hardware",
        "correct": true
      },
      {
        "text": "android.data",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие источники данных использует Network Location Provider для определения координат?",
    "answers": [
      {
        "text": " сигналы сотовых вышек",
        "correct": true
      },
      {
        "text": "сигналы спутников",
        "correct": false
      },
      {
        "text": " сигналы Wi-Fi",
        "correct": true
      },
      {
        "text": "сигналы Bluetooth",
        "correct": false
      }
    ]
  },
  {
    "question": "Android Support Library - это…",
    "answers": [
      {
        "text": "библиотека, в которой представлена техническая документация и требования к программному обеспечению",
        "correct": false
      },
      {
        "text": "набор библиотек для сбора статистики использования мобильного приложения",
        "correct": false
      },
      {
        "text": " набор библиотек, которые обеспечивают обратную совместимость новых API на более старых версиях платформы",
        "correct": true
      },
      {
        "text": "библиотека, предназначенная для загрузки, кеширования и отображения картинок в Android.",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие библиотеки используются для разработки игр, работы с социальными сетями, сбора статистики?",
    "answers": [
      {
        "text": "библиотеки совместимости",
        "correct": false
      },
      {
        "text": " библиотеки специального назначения",
        "correct": true
      },
      {
        "text": "библиотеки, предоставляющие дополнительные возможности",
        "correct": false
      },
      {
        "text": "подключаемые библиотеки",
        "correct": false
      }
    ]
  },
  {
    "question": "С помощью какого инструмента можно скачать Android Support Library в среде Eclipse?",
    "answers": [
      {
        "text": " Android SDK Manager",
        "correct": true
      },
      {
        "text": "Extras",
        "correct": false
      },
      {
        "text": "NineOldAndroids",
        "correct": false
      },
      {
        "text": "Google Play",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие библиотеки позволяют использовать возможности, появившиеся в какой-то версии ОС Android, на более ранних версиях платформы?",
    "answers": [
      {
        "text": "библиотеки специального назначения",
        "correct": false
      },
      {
        "text": "библиотеки, предоставляющие дополнительные возможности",
        "correct": false
      },
      {
        "text": "библиотеки, использующиеся совместно",
        "correct": false
      },
      {
        "text": " библиотеки совместимости",
        "correct": true
      }
    ]
  },
  {
    "question": "Какая библиотека предназначена для использования анимации?",
    "answers": [
      {
        "text": "Universal Image Loader for Android",
        "correct": false
      },
      {
        "text": "Yandex.Metrica for Apps",
        "correct": false
      },
      {
        "text": "ActionBarSherlock",
        "correct": false
      },
      {
        "text": " NineOldAndroids",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие библиотеки позволяют рисовать графики, работать с изображениями и модифицированными элементами управления?",
    "answers": [
      {
        "text": "библиотеки совместимости",
        "correct": false
      },
      {
        "text": "библиотеки специального назначения",
        "correct": false
      },
      {
        "text": " библиотеки, предоставляющие дополнительные возможности",
        "correct": true
      },
      {
        "text": "подключаемые библиотеки",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие вредоносные действия не могут совершать библиотеки, написанные недобросовестными разработчиками?",
    "answers": [
      {
        "text": "извлекать текстовые сообщения, список контактов и вызовов",
        "correct": false
      },
      {
        "text": "передавать секретную информацию пользователя в виде простого текста по протоколу HTTP",
        "correct": false
      },
      {
        "text": "использовать камеру без ведома пользователя",
        "correct": false
      },
      {
        "text": " просматривать исходники других библиотек",
        "correct": true
      }
    ]
  },
  {
    "question": "Скомпилированный файл библиотеки имеет расширение:",
    "answers": [
      {
        "text": "*.java",
        "correct": false
      },
      {
        "text": "*.jdk",
        "correct": false
      },
      {
        "text": " *.jar",
        "correct": true
      },
      {
        "text": "любое",
        "correct": false
      }
    ]
  },
  {
    "question": "Набор библиотек Yandex.Metrica for Apps предназначен для:",
    "answers": [
      {
        "text": " сбора статистической информации",
        "correct": true
      },
      {
        "text": "рисования графиков",
        "correct": false
      },
      {
        "text": "обеспечения совместимости",
        "correct": false
      },
      {
        "text": "доступа к сайту Яндекс",
        "correct": false
      }
    ]
  },
  {
    "question": "Набор библиотек Yandex.Metrica for Apps не предоставляет возможность:",
    "answers": [
      {
        "text": "отслеживания действий, выполненных пользователем в приложении",
        "correct": false
      },
      {
        "text": "получения информации об устройстве",
        "correct": false
      },
      {
        "text": "получения данных о местоположении пользователя",
        "correct": false
      },
      {
        "text": " получения пароля пользователя",
        "correct": true
      }
    ]
  },
  {
    "question": "Библиотека AChartEngine позволяет:",
    "answers": [
      {
        "text": "получать доступ к чартам сайтов популярных радиостанций",
        "correct": false
      },
      {
        "text": " строить графики и диаграммы различных типов",
        "correct": true
      },
      {
        "text": "собирать статистическую информацию",
        "correct": false
      },
      {
        "text": "работать с картами",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотека MapNavigator предназначена для:",
    "answers": [
      {
        "text": "работы с Яндекс.Картами",
        "correct": false
      },
      {
        "text": "работы с любыми картами",
        "correct": false
      },
      {
        "text": " работы с картами Google Maps",
        "correct": true
      },
      {
        "text": "морской навигации",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотеки совместимости предназначены для",
    "answers": [
      {
        "text": "подключения нестандартных элементов управления",
        "correct": false
      },
      {
        "text": " использования возможностей, появившиеся в какой-то версии ОС Android, на более ранних версиях платформы",
        "correct": true
      },
      {
        "text": "сбора статистики",
        "correct": false
      },
      {
        "text": "рисования графиков",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотеки специального назначения используются для",
    "answers": [
      {
        "text": "обеспечения совместимости с предыдущими версиями",
        "correct": false
      },
      {
        "text": "рисования графиков и диаграмм",
        "correct": false
      },
      {
        "text": " разработки игр, работы с социальными сетями, сбора статистики",
        "correct": true
      },
      {
        "text": "работы с любыми картами",
        "correct": false
      }
    ]
  },
  {
    "question": "В категорию библиотек, предоставляющих дополнительные возможности, можно отнести",
    "answers": [
      {
        "text": "библиотеки для обеспечения совместимости с предыдущими версиями",
        "correct": false
      },
      {
        "text": "библиотеки специального назначения",
        "correct": false
      },
      {
        "text": "библиотеки для разработки игр, работы с социальными сетями, сбора статистики",
        "correct": false
      },
      {
        "text": " библиотеки рисования графиков, работы с изображениями, модифицированные элементы управления",
        "correct": true
      }
    ]
  },
  {
    "question": "Какая библиотека предназначена для сбора статистики?",
    "answers": [
      {
        "text": "Universal Image Loader for Android",
        "correct": false
      },
      {
        "text": " Yandex.Metrica for Apps",
        "correct": true
      },
      {
        "text": "ActionBarSherlock",
        "correct": false
      },
      {
        "text": "NineOldAndroids",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая библиотека предназначена для подключения компонента Action Bar в более ранних, чем 4.0, версиях ОС Android?",
    "answers": [
      {
        "text": "Universal Image Loader for Android",
        "correct": false
      },
      {
        "text": "Yandex.Metrica for Apps",
        "correct": false
      },
      {
        "text": " ActionBarSherlock",
        "correct": true
      },
      {
        "text": "NineOldAndroids",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая библиотека предназначена для упрощения загрузки изображений?",
    "answers": [
      {
        "text": " Universal Image Loader for Android",
        "correct": true
      },
      {
        "text": "Yandex.Metrica for Apps;",
        "correct": false
      },
      {
        "text": "ActionBarSherlock",
        "correct": false
      },
      {
        "text": "NineOldAndroids",
        "correct": false
      }
    ]
  },
  {
    "question": "В каком файле необходимо указать минимальную версию Android SDK при настройке обратной совместимости?",
    "answers": [
      {
        "text": "в файле проекта",
        "correct": false
      },
      {
        "text": " в файле манифеста",
        "correct": true
      },
      {
        "text": "в файле подключаемых ресурсов",
        "correct": false
      },
      {
        "text": "в любом файле с расширением *.java",
        "correct": false
      }
    ]
  },
  {
    "question": "При настройке обратной совместимости необходимо добавить в файл манифеста следующую информацию:",
    "answers": [
      {
        "text": "информацию о подключенной библиотеке",
        "correct": false
      },
      {
        "text": "только минимальную версии Android SDK",
        "correct": false
      },
      {
        "text": " минимальную и основную (целевую) версии Android SDK",
        "correct": true
      },
      {
        "text": "только основную (целевую) версии Android SDK",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотека NineOldAndroids позволяет:",
    "answers": [
      {
        "text": " использовать анимацию, доступную только с версии 3.х, на более ранних вариантах платформы Android",
        "correct": true
      },
      {
        "text": "загружать изображения",
        "correct": false
      },
      {
        "text": "строить графики и диаграммы",
        "correct": false
      },
      {
        "text": "парсить HTML-страницы",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотека Universal Image Loader for Android позволяет:",
    "answers": [
      {
        "text": "использовать анимацию, доступную только с версии 3.х, на более ранних вариантах платформы Android",
        "correct": false
      },
      {
        "text": " загружать, кешировать и отображать изображения",
        "correct": true
      },
      {
        "text": "строить графики и диаграммы",
        "correct": false
      },
      {
        "text": "парсить HTML-страницы",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотека AChartEngine позволяет:",
    "answers": [
      {
        "text": "использовать анимацию, доступную только с версии 3.х, на более ранних вариантах платформы Android",
        "correct": false
      },
      {
        "text": "загружать, кешировать и отображать изображения",
        "correct": false
      },
      {
        "text": " строить графики и диаграммы",
        "correct": true
      },
      {
        "text": "парсить HTML-страницы",
        "correct": false
      }
    ]
  },
  {
    "question": "Библиотека jsoup позволяет:",
    "answers": [
      {
        "text": "использовать анимацию, доступную только с версии 3.х, на более ранних вариантах платформы Android",
        "correct": false
      },
      {
        "text": "загружать, кешировать и отображать изображения",
        "correct": false
      },
      {
        "text": "строить графики и диаграммы",
        "correct": false
      },
      {
        "text": " парсить HTML-страницы",
        "correct": true
      }
    ]
  },
  {
    "question": "Facebook SDK for Android - это библиотека, позволяющая:",
    "answers": [
      {
        "text": "получать доступ к информации любого пользователя",
        "correct": false
      },
      {
        "text": "парсить страницы пользователей",
        "correct": false
      },
      {
        "text": "отправлять рекламные сообщения от имени пользователя",
        "correct": false
      },
      {
        "text": " писать сообщения на стену, читать и менять статусы, смотреть ленту друзей",
        "correct": true
      }
    ]
  },
  {
    "question": "Библиотека jsoup не позволяет:",
    "answers": [
      {
        "text": "принимать в качестве параметра URL, файл или строку",
        "correct": false
      },
      {
        "text": "манипулировать HTML-элементами, атрибутами и текстом",
        "correct": false
      },
      {
        "text": "находить и извлекать данные, используя DOM и селекторы CSS",
        "correct": false
      },
      {
        "text": " писать сообщения на стену, читать и менять статусы, смотреть ленту друзей",
        "correct": true
      }
    ]
  },
  {
    "question": "Библиотека Android Holo ColorPicker позволяет:",
    "answers": [
      {
        "text": "манипулировать HTML-элементами, атрибутами и текстом",
        "correct": false
      },
      {
        "text": " выбирать цвет с использованием цветового колеса",
        "correct": true
      },
      {
        "text": "парсить страницы пользователей",
        "correct": false
      },
      {
        "text": "отправлять рекламные сообщения от имени пользователя",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из перечисленного не относится к правилам безопасности при подключении библиотек?",
    "answers": [
      {
        "text": "ознакомиться с форумами и сайтами, где могут обсуждаться библиотеки",
        "correct": false
      },
      {
        "text": "c осторожностью использовать библиотеки из сомнительных источников",
        "correct": false
      },
      {
        "text": "использовать скомпрометированные библиотеки",
        "correct": false
      },
      {
        "text": " лично познакомиться с разработчиками библиотеки",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие вредоносные действия могут совершать библиотеки, написанные недобросовестными разработчиками? Выберите все верные варианты ответов.",
    "answers": [
      {
        "text": " извлекать текстовые сообщения, список контактов и вызовов",
        "correct": true
      },
      {
        "text": " передавать секретную информацию пользователя в виде простого текста по протоколу HTTP",
        "correct": true
      },
      {
        "text": " использовать камеру без ведома пользователя",
        "correct": true
      },
      {
        "text": "просматривать исходники других библиотек",
        "correct": false
      }
    ]
  },
  {
    "question": "Каким источникам распространения библиотек не следует доверять?",
    "answers": [
      {
        "text": "официальные сайты разработчиков библиотек",
        "correct": false
      },
      {
        "text": "рекомендованные сообществом разработчиков Android ресурсы",
        "correct": false
      },
      {
        "text": " популярные форумы",
        "correct": true
      },
      {
        "text": "новостные сайты",
        "correct": false
      }
    ]
  },
  {
    "question": "Может ли мобильное приложение получить доступ к базе данных, созданной в другом приложении?",
    "answers": [
      {
        "text": "может обращаться напрямую",
        "correct": false
      },
      {
        "text": "не может ни при каких обстоятельствах",
        "correct": false
      },
      {
        "text": " может, но только с помощью контент-провайдеров",
        "correct": true
      },
      {
        "text": "право на доступ открывает приложение-хозяин базы данных",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью может быть использован SQLiteOpenHelper?",
    "answers": [
      {
        "text": " для создания базы данных",
        "correct": true
      },
      {
        "text": "для выполнения запросов к базе данных",
        "correct": false
      },
      {
        "text": " для обновления базы данных",
        "correct": true
      },
      {
        "text": "для вызова справочной системы по базе данных",
        "correct": false
      }
    ]
  },
  {
    "question": "Какими характеристиками, определившими ее популярность, обладает система SQLite?",
    "answers": [
      {
        "text": "система является бесплатной",
        "correct": false
      },
      {
        "text": "система занимает небольшой объем памяти, примерно 150 Кбайт",
        "correct": false
      },
      {
        "text": "система не требует установки и администрирования",
        "correct": false
      },
      {
        "text": " все перечисленные",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой класс необходимо реализовать, чтобы следить за изменениями положения телефона в пространстве (акселерометра)?",
    "answers": [
      {
        "text": "AccelerometrListener",
        "correct": false
      },
      {
        "text": " SensorEventListener",
        "correct": true
      },
      {
        "text": "DeviceEventListener",
        "correct": false
      },
      {
        "text": "MoveListener",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой класс предусмотрен в Android для работы с базой данных SQLite напрямую?",
    "answers": [
      {
        "text": "Database",
        "correct": false
      },
      {
        "text": "SQLiteTable",
        "correct": false
      },
      {
        "text": " SQLiteDatabase",
        "correct": true
      },
      {
        "text": "AndroidDatabase",
        "correct": false
      }
    ]
  },
  {
    "question": "Выберите верные утверждения о классе ContentValues?",
    "answers": [
      {
        "text": " используется для добавления новых строк в таблицу",
        "correct": true
      },
      {
        "text": "используется получения результатов запросов к базе данных",
        "correct": false
      },
      {
        "text": " каждый объект этого класса представляет собой одну строку таблицы",
        "correct": true
      },
      {
        "text": " каждый объект этого класса выглядит как ассоциативный массив с именами столбцов и значениями, которые им соответствуют",
        "correct": true
      }
    ]
  },
  {
    "question": "В каком пакете находится большая часть API системы анимации свойств?",
    "answers": [
      {
        "text": " android.animation",
        "correct": true
      },
      {
        "text": "android.property.animation",
        "correct": false
      },
      {
        "text": "android.animation.property",
        "correct": false
      },
      {
        "text": "android.animation.items",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие виды анимации поддерживает платформа Android?",
    "answers": [
      {
        "text": " анимация свойств (Property Animation)",
        "correct": true
      },
      {
        "text": "flash анимация (Flash Animation)",
        "correct": false
      },
      {
        "text": " анимация компонентов GUI (View Animation)",
        "correct": true
      },
      {
        "text": " кадровая анимация (Drawable Animation)",
        "correct": true
      }
    ]
  },
  {
    "question": "Какую функциональность обеспечивает класс ValueAnimator?",
    "answers": [
      {
        "text": "рассчитывает значения анимации и содержит распределенные во времени детали каждой анимации",
        "correct": false
      },
      {
        "text": "содержит информацию о необходимости повторений анимации",
        "correct": false
      },
      {
        "text": "содержит слушателей, получающих уведомления о событиях обновления",
        "correct": false
      },
      {
        "text": "предоставляет возможность задавать пользовательские типы для вычисления",
        "correct": false
      },
      {
        "text": " все перечисленные",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой вычислитель в системе анимации свойств предоставляет интерфейс, позволяющий создавать собственных вычислителей?",
    "answers": [
      {
        "text": "IntEvaluator",
        "correct": false
      },
      {
        "text": "FloatEvaluator",
        "correct": false
      },
      {
        "text": "ArgbEvaluator",
        "correct": false
      },
      {
        "text": " TypeEvaluator",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой интерфейс может быть использован для создания собственного интерполятора?",
    "answers": [
      {
        "text": " TimeInterpolator",
        "correct": true
      },
      {
        "text": "TypeInterpolator",
        "correct": false
      },
      {
        "text": "VoidInterpolator",
        "correct": false
      },
      {
        "text": "FuncInterpolator",
        "correct": false
      }
    ]
  },
  {
    "question": "В каком пакете определены интерполяторы?",
    "answers": [
      {
        "text": " android.view.animation",
        "correct": true
      },
      {
        "text": "android.animation",
        "correct": false
      },
      {
        "text": "android.interpolation",
        "correct": false
      },
      {
        "text": "android.calculation",
        "correct": false
      }
    ]
  },
  {
    "question": "Для чего служит папка res/anim/ проекта?",
    "answers": [
      {
        "text": " в этой папке находятся XML файлы, задающие последовательность инструкций анимации преобразований",
        "correct": true
      },
      {
        "text": "в этой папке находятся файлы, содержащие набор картинок, предназначенных для кадровой анимации",
        "correct": false
      },
      {
        "text": "в этой папке находятся XML файлы, задающие реализацию анимации свойств",
        "correct": false
      },
      {
        "text": "в этой папке находятся файлы, содержащие анимированные ролики для воспроизведения в приложении",
        "correct": false
      }
    ]
  },
  {
    "question": "Выберите верные утверждения о кадровой анимации?",
    "answers": [
      {
        "text": "каждый кадр является графическим ресурсом",
        "correct": false
      },
      {
        "text": "реализуется быстрой сменой кадров",
        "correct": false
      },
      {
        "text": "каждый кадр располагается в папке res/drawable/ проекта",
        "correct": false
      },
      {
        "text": " все перечисленные",
        "correct": true
      }
    ]
  },
  {
    "question": "Для создания задачи, работающей в фоновом режиме и не имеющей собственного UI используется класс",
    "answers": [
      {
        "text": "Background",
        "correct": false
      },
      {
        "text": "Turn",
        "correct": false
      },
      {
        "text": "Minimized",
        "correct": false
      },
      {
        "text": " Service",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой метод класса Canvas используется для изображения точечного рисунка?",
    "answers": [
      {
        "text": "drawImage",
        "correct": false
      },
      {
        "text": "drawDrawable",
        "correct": false
      },
      {
        "text": " drawBitmap",
        "correct": true
      },
      {
        "text": "drawPicture",
        "correct": false
      }
    ]
  },
  {
    "question": "С помощью какого флага можно запретить устройству гасить экран при запущенном приложении?",
    "answers": [
      {
        "text": "FLAG_SLEEP_DISABLE",
        "correct": false
      },
      {
        "text": "FLAG_KEEP_SCREEN_ENABLE",
        "correct": false
      },
      {
        "text": "FLAG_LIGHT_ON",
        "correct": false
      },
      {
        "text": " FLAG_KEEP_SCREEN_ON",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой метод жизненного цикла активности вызывается системой непосредственно перед появлением активности на экране?",
    "answers": [
      {
        "text": " onResume()",
        "correct": true
      },
      {
        "text": "onOpen()",
        "correct": false
      },
      {
        "text": "onCreate()",
        "correct": false
      },
      {
        "text": "onVisible()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод позволяет прервать вычислительный поток?",
    "answers": [
      {
        "text": "Thread.stopSelft()",
        "correct": false
      },
      {
        "text": " Thread.interrupt()",
        "correct": true
      },
      {
        "text": "Thread.pause()",
        "correct": false
      },
      {
        "text": "Thread.stop()",
        "correct": false
      }
    ]
  },
  {
    "question": "С помощью какого метода можно запретить смену ориентации устройства, при запущенном приложении?",
    "answers": [
      {
        "text": " setRequestedOrientation",
        "correct": true
      },
      {
        "text": "disableChangeOrientation",
        "correct": false
      },
      {
        "text": "setOritentation",
        "correct": false
      },
      {
        "text": "setChangeOritentation",
        "correct": false
      }
    ]
  },
  {
    "question": "С какой целью используется метод SurfaceHolder.lockCanvas()?",
    "answers": [
      {
        "text": "блокировка Canvas от сворачивания",
        "correct": false
      },
      {
        "text": "игнорирование дальнейшего взаимодействия с Canvas",
        "correct": false
      },
      {
        "text": " блокировка Canvas для перерисовки",
        "correct": true
      },
      {
        "text": "сокрытие Canvas",
        "correct": false
      }
    ]
  },
  {
    "question": "В какой файл обязательно добавляется информация при создании нового Activity в приложении?",
    "answers": [
      {
        "text": " AndroidManifest.xml",
        "correct": true
      },
      {
        "text": "layout.xml",
        "correct": false
      },
      {
        "text": "activity.xml",
        "correct": false
      },
      {
        "text": "main.java",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод вызывается для остановки работы Service?",
    "answers": [
      {
        "text": "stop()",
        "correct": false
      },
      {
        "text": "exit()",
        "correct": false
      },
      {
        "text": "done()",
        "correct": false
      },
      {
        "text": " stopSelf()",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой класс является базовым для вывода трехмерной графики с использованием OpenGL ES?",
    "answers": [
      {
        "text": " GLSurfaceView",
        "correct": true
      },
      {
        "text": "View3DGraph",
        "correct": false
      },
      {
        "text": "OpenGLView",
        "correct": false
      },
      {
        "text": "SurfaceView3D",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой из датчиков не используется для определения положения смартфона в пространстве?",
    "answers": [
      {
        "text": "акселерометр",
        "correct": false
      },
      {
        "text": "магнитометр",
        "correct": false
      },
      {
        "text": " секундомер",
        "correct": true
      },
      {
        "text": "гироскоп",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой класс определяет методы для изображения линий, текста, точечных рисунков и других графических примитивов?",
    "answers": [
      {
        "text": " Canvas",
        "correct": true
      },
      {
        "text": "Drawable",
        "correct": false
      },
      {
        "text": "Picture",
        "correct": false
      },
      {
        "text": "View",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод позволяет отследить touch-ввод?",
    "answers": [
      {
        "text": " onTouchEvent()",
        "correct": true
      },
      {
        "text": "onTouchAction()",
        "correct": false
      },
      {
        "text": "onTouchListener()",
        "correct": false
      },
      {
        "text": "onTouchMaked()",
        "correct": false
      }
    ]
  },
  {
    "question": "К преимуществам среды разработки Intel XDK можно отнести:",
    "answers": [
      {
        "text": "легкость разработки кроссплатформенных приложений",
        "correct": false
      },
      {
        "text": "наличие собственного эффективного эмулятора",
        "correct": false
      },
      {
        "text": "наличие облачного хранилища для разработанных приложений",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Тестирование на реальных устройствах приложений, разработанных в Intel XDK",
    "answers": [
      {
        "text": "невозможно",
        "correct": false
      },
      {
        "text": "можно проводить, установив на устройство специальную программу",
        "correct": false
      },
      {
        "text": "можно проводить, собрав проект и установив результат сборки на устройство",
        "correct": false
      },
      {
        "text": " можно проводить, установив на устройство специальную программу или собрав проект и установив результат сборки на устройство",
        "correct": true
      }
    ]
  },
  {
    "question": "Среда разработки Intel XDK поддерживает следующие языки программирования:",
    "answers": [
      {
        "text": " JavaScript",
        "correct": true
      },
      {
        "text": "Java",
        "correct": false
      },
      {
        "text": "C#",
        "correct": false
      },
      {
        "text": "C++",
        "correct": false
      }
    ]
  },
  {
    "question": "Эмулятор среды разработки Intel XDK:",
    "answers": [
      {
        "text": "позволяет проверить работу приложений, использующих акселерометр",
        "correct": false
      },
      {
        "text": "не требует больших системных ресурсов",
        "correct": false
      },
      {
        "text": "позволяет моделировать исполнение приложение на ряде устройств",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "В среде Intel XDK можно разрабатывать приложения для следующих платформ:",
    "answers": [
      {
        "text": "Android",
        "correct": false
      },
      {
        "text": "Apple iOS",
        "correct": false
      },
      {
        "text": "Tizen",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Для разработки приложений в среде Intel XDK необходимы знания:",
    "answers": [
      {
        "text": "HTML5 и CSS3",
        "correct": false
      },
      {
        "text": "HTML5",
        "correct": false
      },
      {
        "text": "HTML5 и Javascript",
        "correct": false
      },
      {
        "text": " HTML5, CSS3, Javascript",
        "correct": true
      }
    ]
  },
  {
    "question": "Разрабатывать приложения в среде Intel XDK можно:",
    "answers": [
      {
        "text": "''с нуля'', прописывая все элементы",
        "correct": false
      },
      {
        "text": "пользоваться заготовленными примерами",
        "correct": false
      },
      {
        "text": "использовать встроенный ''дизайнер элементов'' для отрисовки элементов",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Команда intel.xdk.device.setRotateOrientation(\"any\") позволяет:",
    "answers": [
      {
        "text": " зафиксировать текущую ориентацию (портретную или альбомную) мобильного устройства",
        "correct": true
      },
      {
        "text": "разрешить любую ориентацию (портретную или альбомную) мобильного устройства",
        "correct": false
      },
      {
        "text": "зафиксировать портретную ориентацию мобильного устройства",
        "correct": false
      },
      {
        "text": "все варианты ответа неверны",
        "correct": false
      }
    ]
  },
  {
    "question": "Команда intel.xdk.device.managePower(true,false) отвечает за:",
    "answers": [
      {
        "text": " управление спящим режимом",
        "correct": true
      },
      {
        "text": "подключение/отключение методов Intel XDK",
        "correct": false
      },
      {
        "text": "управление акселерометром",
        "correct": false
      },
      {
        "text": "все варианты ответа неверны",
        "correct": false
      }
    ]
  },
  {
    "question": "В заготовке любого приложения, разрабатываемого в среде Intel XDK прописана:",
    "answers": [
      {
        "text": "настройка размеров приложения под размеры устройства",
        "correct": false
      },
      {
        "text": "фиксация размеров приложения (запрет ''скроллинга'')",
        "correct": false
      },
      {
        "text": "скрытие окна заставки Intel XDK",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Среда Intel XDK предоставляет возможность работы:",
    "answers": [
      {
        "text": "с встроенным аудиоплеером",
        "correct": false
      },
      {
        "text": "с акселерометром",
        "correct": false
      },
      {
        "text": "с камерой",
        "correct": false
      },
      {
        "text": " все варианты ответа верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Создавать и редактировать пользовательский интерфейс приложений в среде Intel XDK можно:",
    "answers": [
      {
        "text": "только прописывая теги вручную",
        "correct": false
      },
      {
        "text": "только изменяя готовые шаблоны с интерфейсом",
        "correct": false
      },
      {
        "text": "используя встроенное приложение App Designer",
        "correct": false
      },
      {
        "text": " все варианты ответа неверны",
        "correct": true
      }
    ]
  },
  {
    "question": "Возможен ли перенос приложений iOS* в среду HTML5:",
    "answers": [
      {
        "text": " да, используя средства Intel XDK",
        "correct": true
      },
      {
        "text": "нет, прямой перенос приложений невозможен",
        "correct": false
      },
      {
        "text": "да, используя только сторонние средства",
        "correct": false
      },
      {
        "text": "да, только для iPhone, используя средства Intel XDK",
        "correct": false
      }
    ]
  },
  {
    "question": "Стандарт HTML5 ориентирован на:",
    "answers": [
      {
        "text": " новые элементы для организации более грамотной семантики и структурирования элементов документа",
        "correct": true
      },
      {
        "text": "новые элементы для форматирования таблиц",
        "correct": false
      },
      {
        "text": "новые элементы для форматирования текста и списков",
        "correct": false
      },
      {
        "text": "правильный вариант ответа отсутствует",
        "correct": false
      }
    ]
  },
  {
    "question": "Новый тег  HTML5 <canvas> предназначен для:",
    "answers": [
      {
        "text": "работы с фоновым изображением страницы",
        "correct": false
      },
      {
        "text": " создания двумерных изображений и динамической анимации",
        "correct": true
      },
      {
        "text": "создания трехмерных изображений",
        "correct": false
      },
      {
        "text": "создания двумерных изображений",
        "correct": false
      }
    ]
  },
  {
    "question": "Рабочий стандарт каскадных таблиц стилей CSS 3 ориентирован на:",
    "answers": [
      {
        "text": "более гибкое оформление фоновых изображений",
        "correct": false
      },
      {
        "text": "работу со сглаженными углами и тенями",
        "correct": false
      },
      {
        "text": "тонкую настройку параметров под различные устройства вывода",
        "correct": false
      },
      {
        "text": " все вышеперечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "JavaScript позволяет:",
    "answers": [
      {
        "text": "создавать геометрические фигуры и анимацию с помощью SVG",
        "correct": false
      },
      {
        "text": "создавать трехмерную графику с помощью WebGL",
        "correct": false
      },
      {
        "text": "запускать видео",
        "correct": false
      },
      {
        "text": " все вышеперечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "С помощью JavaScript можно разрабатывать:",
    "answers": [
      {
        "text": "только десктопные оконные приложения",
        "correct": false
      },
      {
        "text": "только web-приложения",
        "correct": false
      },
      {
        "text": "только сценарии для браузера",
        "correct": false
      },
      {
        "text": " десктопные оконные приложения и web-приложения",
        "correct": true
      }
    ]
  },
  {
    "question": "Взаимодействие с устройствами ввода/вывода средствами языка JavaScript:",
    "answers": [
      {
        "text": "невозможно",
        "correct": false
      },
      {
        "text": "возможно",
        "correct": false
      },
      {
        "text": "возможно при подключении внешней библиотеки",
        "correct": false
      },
      {
        "text": " возможно при подключении серверной программной платформы Node.js",
        "correct": true
      }
    ]
  },
  {
    "question": "Каскадные таблицы стилей это:",
    "answers": [
      {
        "text": " набор параметров форматирования, который применяется к элементам документа",
        "correct": true
      },
      {
        "text": "параметры форматирования, которые применяются к тексту",
        "correct": false
      },
      {
        "text": "теги, задающие вложенные таблицы",
        "correct": false
      },
      {
        "text": "параметры форматирования, которые применяются к таблицам",
        "correct": false
      }
    ]
  },
  {
    "question": "Следующие утверждения верны:",
    "answers": [
      {
        "text": " приложения html5 исполняются медленнее и требуют больших ресурсов, чем ''нативные''",
        "correct": true
      },
      {
        "text": "приложения html5 исполняются быстрее и требуют меньше ресурсов, чем ''нативные''",
        "correct": false
      },
      {
        "text": "JavaScript не позволяет подключать другие внешние библиотеки, написанные на других языках",
        "correct": false
      },
      {
        "text": "среда Intel XDK не работает с мультисенсорностью",
        "correct": false
      }
    ]
  },
  {
    "question": "Инструмент App Designer среды Intel XDK позволяет:",
    "answers": [
      {
        "text": "создавать и редактировать пользовательский интерфейс в режиме кода",
        "correct": false
      },
      {
        "text": " создавать и редактировать пользовательский интерфейс в режиме кода и конструктора",
        "correct": true
      },
      {
        "text": "создавать и редактировать пользовательский интерфейс в режиме конструктора",
        "correct": false
      },
      {
        "text": "ни в каком из перечисленных режимов",
        "correct": false
      }
    ]
  },
  {
    "question": "Возможность установки *.apk-файлов, разработанных с использованием Intel XDK (выберите все правильные варианты):",
    "answers": [
      {
        "text": "разрешена по умолчанию",
        "correct": false
      },
      {
        "text": "зависит от настроек устройства, которые контролируются пользователем",
        "correct": false
      },
      {
        "text": "не может быть запрещена",
        "correct": false
      },
      {
        "text": " появляется при разрешении установки приложений из альтернативных источников",
        "correct": true
      }
    ]
  },
  {
    "question": "HTML, CSS и Javascript не позволяют:",
    "answers": [
      {
        "text": "создавать и редактировать изображение, видео и аудио в онлайн-режиме",
        "correct": false
      },
      {
        "text": "автоматизировать рутинные действия в операционной системе",
        "correct": false
      },
      {
        "text": " получать прямой доступ к оперативной памяти",
        "correct": true
      },
      {
        "text": "совместно работать над документами",
        "correct": false
      }
    ]
  },
  {
    "question": "К новым возможностям HTML5 относят (выберите все верные варианты ответа):",
    "answers": [
      {
        "text": "форматирование данных в режиме таблицы",
        "correct": false
      },
      {
        "text": " возможность добавления аудио и видео без использования вспомогательных средств",
        "correct": true
      },
      {
        "text": "возможность прямого доступа к оперативной памяти",
        "correct": false
      },
      {
        "text": " возможность рисования на холсте",
        "correct": true
      }
    ]
  },
  {
    "question": "Встроенный браузер ОС Android, как правило:",
    "answers": [
      {
        "text": "очень плохо поддерживает основные возможности HTML5",
        "correct": false
      },
      {
        "text": "не поддерживает теги HTML5",
        "correct": false
      },
      {
        "text": " очень хорошо поддерживает новые возможности HTML5",
        "correct": true
      },
      {
        "text": "поддерживает абсолютно все возможности HTML5",
        "correct": false
      }
    ]
  },
  {
    "question": "К новым возможностям CSS3 относят (выберите все варианты ответов):",
    "answers": [
      {
        "text": " свойство background-size, позволяющее автоматически изменять размер фона под размер окна браузера",
        "correct": true
      },
      {
        "text": " возможность добавления скругленных углов",
        "correct": true
      },
      {
        "text": "возможность изменять размер элементов страницы",
        "correct": false
      },
      {
        "text": "возможность прямого доступа к оперативной памяти",
        "correct": false
      }
    ]
  },
  {
    "question": "Серверная программная платформа Node.js не позволяет:",
    "answers": [
      {
        "text": "JavaScript взаимодействовать с устройствами ввода/вывода через свой API",
        "correct": false
      },
      {
        "text": " получать прямой доступ к памяти",
        "correct": true
      },
      {
        "text": "подключать другие внешние библиотеки, написанные на разных языках",
        "correct": false
      },
      {
        "text": "разрабатывать десктопные оконные приложения",
        "correct": false
      }
    ]
  },
  {
    "question": "JavaScript не позволяет:",
    "answers": [
      {
        "text": "работать с картами",
        "correct": false
      },
      {
        "text": "одновременно использовать несколько подключаемых библиотек",
        "correct": false
      },
      {
        "text": " получать прямой доступ к памяти",
        "correct": true
      },
      {
        "text": "работать с реестром",
        "correct": false
      }
    ]
  },
  {
    "question": "Информация, представленная визуально, должна:",
    "answers": []
  },
  {
    "question": "показывать причинно-следственную связь.",
    "answers": [
      {
        "text": "способствовать визуальному сравнению.",
        "correct": false
      },
      {
        "text": "объединять текст, графику и данные в одном изображении",
        "correct": false
      },
      {
        "text": " все вышеперечисленное",
        "correct": true
      }
    ]
  },
  {
    "question": "Какое портирование наиболее сложное?",
    "answers": [
      {
        "text": " нативных приложений",
        "correct": true
      },
      {
        "text": "гибридных приложений",
        "correct": false
      },
      {
        "text": "Web-приложений",
        "correct": false
      },
      {
        "text": "приложений для iOS",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие разрешения необходимо добавить в манифест приложения, чтобы оно могло записывать мультимедийные файлы?",
    "answers": [
      {
        "text": "<uses-permission android: name=«android. permission. RECORD_MULTIMEDIA»/>",
        "correct": false
      },
      {
        "text": " <uses-permission android: name=«android. permission. RECORD_AUDIO»/>",
        "correct": true
      },
      {
        "text": "<uses-permission android: name=«android. permission. RECORD_AUDIO_VIDEO»/>",
        "correct": false
      },
      {
        "text": " <uses-permission android: name=«android. permission. RECORD_VIDEO»/>",
        "correct": true
      }
    ]
  },
  {
    "question": "Что такое AdMob?",
    "answers": [
      {
        "text": "приложение",
        "correct": false
      },
      {
        "text": "блокировщик рекламы",
        "correct": false
      },
      {
        "text": " сервис монетизации и продвижения приложений",
        "correct": true
      },
      {
        "text": "средство разработки",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из перечисленного может являться примером эмоциональной цели?",
    "answers": [
      {
        "text": " ощущать душевный подъем или расслабленность",
        "correct": true
      },
      {
        "text": "быть собранным и сосредоточенным",
        "correct": false
      },
      {
        "text": "узнавать о проблемах до того, как они послужат причиной катастрофы",
        "correct": false
      },
      {
        "text": "стать знатоком в определенной области",
        "correct": false
      }
    ]
  },
  {
    "question": "Как называется документ, содержащий описание теста, определяющий входную информацию, условия и последовательность выполнения действий и ожидаемый выходной результат?",
    "answers": [
      {
        "text": "тестовый скрипт",
        "correct": false
      },
      {
        "text": "тестовые данные",
        "correct": false
      },
      {
        "text": " сценарий тестирования (test case)",
        "correct": true
      },
      {
        "text": "набор тестов",
        "correct": false
      }
    ]
  },
  {
    "question": "При создании пиктограмм необходимо",
    "answers": [
      {
        "text": "все вышеперечисленное",
        "correct": false
      },
      {
        "text": "использовать как можно больше деталей, уточняющих смысл пиктограммы",
        "correct": false
      },
      {
        "text": "обязательно использовать метафоры",
        "correct": false
      },
      {
        "text": " использовать элементы повторно",
        "correct": true
      }
    ]
  },
  {
    "question": "Что такое мультитач?",
    "answers": [
      {
        "text": "сенсорный экран, реагирующий на нажатие пальца",
        "correct": false
      },
      {
        "text": " функция сенсорных систем ввода, осуществляющая одновременное определение координат двух и более точек касания",
        "correct": true
      },
      {
        "text": "залипание клавиш смартфона",
        "correct": false
      },
      {
        "text": "функция сенсорных систем ввода, осуществляющая последовательное определение координат",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой этап не входит в процесс проектирования, ориентированного на цели?",
    "answers": [
      {
        "text": "выработка требований",
        "correct": false
      },
      {
        "text": "определение общей инфраструктуры",
        "correct": false
      },
      {
        "text": "моделирование",
        "correct": false
      },
      {
        "text": " создание кода",
        "correct": true
      }
    ]
  },
  {
    "question": "Как расшифровывается аббревиатура GPA:",
    "answers": [
      {
        "text": " Graphics Performance Analyzers",
        "correct": true
      },
      {
        "text": "Global Peace Agency",
        "correct": false
      },
      {
        "text": "Gay Police Association",
        "correct": false
      },
      {
        "text": "Gnu Privacy Assistant",
        "correct": false
      }
    ]
  },
  {
    "question": "Как LinearLayout может размещать объекты?",
    "answers": [
      {
        "text": "только по вертикали",
        "correct": false
      },
      {
        "text": "только по горизонтали",
        "correct": false
      },
      {
        "text": "в зависимости от возможностей экрана устройства",
        "correct": false
      },
      {
        "text": " и по горизонтали, и по вертикали",
        "correct": true
      }
    ]
  },
  {
    "question": "Какое свойство используется для присвоения объекту показателя веса (важности)?",
    "answers": [
      {
        "text": "gravity",
        "correct": false
      },
      {
        "text": "color",
        "correct": false
      },
      {
        "text": " weight",
        "correct": true
      },
      {
        "text": "аlignment",
        "correct": false
      }
    ]
  },
  {
    "question": "Может ли использоваться переключатель RadioButton в одиночестве?",
    "answers": [
      {
        "text": "да",
        "correct": false
      },
      {
        "text": "зависит версии Android",
        "correct": false
      },
      {
        "text": " нет, всегда должно быть два и более переключателя и только один из них может быть выбранным",
        "correct": true
      },
      {
        "text": "нет, всегда должно быть два и более переключателя, но выбранными могут быть несколько",
        "correct": false
      }
    ]
  },
  {
    "question": "В каком состоянии не может находиться activity?",
    "answers": [
      {
        "text": " Может находиться во всех перечисленных",
        "correct": true
      },
      {
        "text": "Приостановлено",
        "correct": false
      },
      {
        "text": "Активно",
        "correct": false
      },
      {
        "text": "Остановлено",
        "correct": false
      }
    ]
  },
  {
    "question": "Что является первоочередной задачей при анализе производительности приложения?",
    "answers": [
      {
        "text": "увеличение показателя FPS",
        "correct": false
      },
      {
        "text": "выявление наиболее вычислительно затратных этапов формирования сцены",
        "correct": false
      },
      {
        "text": "распараллеливанние программного кода",
        "correct": false
      },
      {
        "text": " определение того, является ли производительность приложения CPU– или GPU-ограниченным",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой из вариантов программной установки фона неправильный?",
    "answers": [
      {
        "text": " tv. setBackgroundColor (R. color. tvBackground);",
        "correct": true
      },
      {
        "text": "tv. setBackgroundColor (getResources (). getColor (R. color. tvBackground));",
        "correct": false
      },
      {
        "text": "tv. setBackgroundResource (R. color. tvBackground);",
        "correct": false
      },
      {
        "text": "Все перечисленные",
        "correct": false
      }
    ]
  },
  {
    "question": "С помощью какого инструмента создается эмулятор?",
    "answers": [
      {
        "text": "ADB",
        "correct": false
      },
      {
        "text": "DDMS",
        "correct": false
      },
      {
        "text": " AVD Manager",
        "correct": true
      },
      {
        "text": "Android SDK Manager",
        "correct": false
      }
    ]
  },
  {
    "question": "Что не является характерной особенностью языка программирования Java?",
    "answers": [
      {
        "text": " Низкоуровневый язык программирования",
        "correct": true
      },
      {
        "text": "Не зависит от архитектуры",
        "correct": false
      },
      {
        "text": "Многопоточный",
        "correct": false
      },
      {
        "text": "Безопасный",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие элементы приложения являются не обязательными?",
    "answers": [
      {
        "text": "src",
        "correct": false
      },
      {
        "text": " assets",
        "correct": true
      },
      {
        "text": "res",
        "correct": false
      },
      {
        "text": "gen",
        "correct": false
      }
    ]
  },
  {
    "question": "В чем заключается главное преимущество экономного расхода электроэнергии в работе мобильных устройств?",
    "answers": [
      {
        "text": " продлевается срок работы устройства от аккумулятора",
        "correct": true
      },
      {
        "text": "возможность одновременной работы большого числа приложений",
        "correct": false
      },
      {
        "text": "повышается производительность приложения",
        "correct": false
      },
      {
        "text": "все перечисленные",
        "correct": false
      }
    ]
  },
  {
    "question": "Каких компонентов не существует в Android-приложении?",
    "answers": [
      {
        "text": "Broadcast receivers",
        "correct": false
      },
      {
        "text": "Content providers",
        "correct": false
      },
      {
        "text": "Services",
        "correct": false
      },
      {
        "text": " Broadcast providers",
        "correct": true
      }
    ]
  },
  {
    "question": "Чем отличаются файлы, располагающиеся в каталоге «assets» от файлов из «res»?",
    "answers": [
      {
        "text": " всем перечисленным",
        "correct": true
      },
      {
        "text": "для считывания файла, располагающегося в «assets», необходимо указать путь к нему",
        "correct": false
      },
      {
        "text": "талог «assets» позволяет задавать произвольные имена файлов",
        "correct": false
      },
      {
        "text": "для файлов, располагающихся в «assets», не генерируются идентификаторы ресурсов",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая из перечисленных ниже мер не приведёт к уменьшению количества вызовов функций отрисовки и смены состояний (DP Сalls & State Changes)?",
    "answers": [
      {
        "text": "использование более оптимального алгоритма проверки на видимость объектов",
        "correct": false
      },
      {
        "text": "сортировка объектов по материалам, шейдерам",
        "correct": false
      },
      {
        "text": "объединение геометрических объектов в один",
        "correct": false
      },
      {
        "text": " уменьшение глубины цветности",
        "correct": true
      }
    ]
  },
  {
    "question": "Что не входит в состав JDK?",
    "answers": [
      {
        "text": " интегрированная среда разработки",
        "correct": true
      },
      {
        "text": "компилятор Java",
        "correct": false
      },
      {
        "text": "стандартные библиотеки классов Java",
        "correct": false
      },
      {
        "text": "виртуальная машина Java",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод для виджета RatingBar возвращает значение рейтинга?",
    "answers": [
      {
        "text": " getRating ()",
        "correct": true
      },
      {
        "text": "setRating (float)",
        "correct": false
      },
      {
        "text": "setNumStart (int)",
        "correct": false
      },
      {
        "text": "isIndicator ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой элемент файла AndroidManifest. xml во время установки запрашивает разрешение, которое должно быть предоставлено приложению системой для нормального функционирования?",
    "answers": [
      {
        "text": "<uses-sdk>",
        "correct": false
      },
      {
        "text": " <uses-permission>",
        "correct": true
      },
      {
        "text": "<uses-feature>",
        "correct": false
      },
      {
        "text": "<uses-configuration>",
        "correct": false
      }
    ]
  },
  {
    "question": "Что такое альфа-канал?",
    "answers": [
      {
        "text": "особая область памяти графического адаптера, предназначенная для внеочередной обработки данных",
        "correct": false
      },
      {
        "text": "одна из DirectX-команд, отвечающая за уровень контрастности изображения",
        "correct": false
      },
      {
        "text": "одна из DirectX-команд, отвечающая за уровень контрастности изображения",
        "correct": false
      },
      {
        "text": " дополнительный канал в изображении, который, используется для создания прозрачности",
        "correct": true
      }
    ]
  },
  {
    "question": "Для создания собственных диалоговых окон используют контейнер:",
    "answers": [
      {
        "text": "AlertDialog",
        "correct": false
      },
      {
        "text": "ProgressDialog",
        "correct": false
      },
      {
        "text": "DatePickerDialog",
        "correct": false
      },
      {
        "text": " DialogFragment",
        "correct": true
      }
    ]
  },
  {
    "question": "Какое название получила версия Android 4.4?",
    "answers": [
      {
        "text": "kitekat",
        "correct": false
      },
      {
        "text": "Krispy Kreme",
        "correct": false
      },
      {
        "text": " Kit Kat",
        "correct": true
      },
      {
        "text": "kream-karamel",
        "correct": false
      }
    ]
  },
  {
    "question": "Для создания задачи, работающей в фоновом режиме и не имеющей собственного UI используется класс",
    "answers": [
      {
        "text": "Background",
        "correct": false
      },
      {
        "text": " Service",
        "correct": true
      },
      {
        "text": "Turn",
        "correct": false
      },
      {
        "text": "Minimized",
        "correct": false
      }
    ]
  },
  {
    "question": "Новый тег HTML5 <canvas> предназначен для:",
    "answers": [
      {
        "text": "создания трехмерных изображений",
        "correct": false
      },
      {
        "text": "создания двумерных изображений",
        "correct": false
      },
      {
        "text": " создания двумерных изображений и динамической анимации",
        "correct": true
      },
      {
        "text": "работы с фоновым изображением страницы",
        "correct": false
      }
    ]
  },
  {
    "question": "Системы позиционирования смартфона могут включать",
    "answers": [
      {
        "text": " все перечисленное",
        "correct": true
      },
      {
        "text": "систему GPS",
        "correct": false
      },
      {
        "text": "систему ГЛОНАСС",
        "correct": false
      },
      {
        "text": "сигналы WiFi и Bluetooth",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие библиотеки используются для разработки игр, работы с социальными сетями, сбора статистики?",
    "answers": [
      {
        "text": "библиотеки, предоставляющие дополнительные возможности",
        "correct": false
      },
      {
        "text": "подключаемые библиотеки",
        "correct": false
      },
      {
        "text": "библиотеки совместимости",
        "correct": false
      },
      {
        "text": " библиотеки специального назначения",
        "correct": true
      }
    ]
  },
  {
    "question": "Выберите верные утверждения",
    "answers": [
      {
        "text": " каждому приложению соответствует отдельный Linux процесс, который запускается как только это необходимо хотя бы одному компоненту приложения",
        "correct": true
      },
      {
        "text": "операционная система Android является многопользовательской ОС, в которой каждое приложение рассматривается как отдельный пользователь",
        "correct": false
      },
      {
        "text": "доступ к элементам приложения предоставляется любому другому приложению",
        "correct": false
      },
      {
        "text": "каждому процессу соответствует отдельный экземпляр виртуальной машины Dalvik",
        "correct": false
      },
      {
        "text": "по умолчанию, система назначает каждому приложению уникальный пользовательский ID, который используется приложением по его усмотрению",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой вычислитель в системе анимации свойств предоставляет интерфейс, позволяющий создавать собственных вычислителей?",
    "answers": [
      {
        "text": "IntEvaluator",
        "correct": false
      },
      {
        "text": "ArgbEvaluator",
        "correct": false
      },
      {
        "text": "FloatEvaluator",
        "correct": false
      },
      {
        "text": " TypeEvaluator",
        "correct": true
      }
    ]
  },
  {
    "question": "В каком пакете находится большая часть API системы анимации свойств?",
    "answers": [
      {
        "text": "android. property. animation",
        "correct": false
      },
      {
        "text": " android. animation",
        "correct": true
      },
      {
        "text": "android. animation. property",
        "correct": false
      },
      {
        "text": "аndroid. animation. items",
        "correct": false
      }
    ]
  },
  {
    "question": "Следующие утверждения верны:",
    "answers": [
      {
        "text": "JavaScript не позволяет подключать другие внешние библиотеки, написанные на других языках",
        "correct": false
      },
      {
        "text": " приложения html5 исполняются медленнее и требуют больших ресурсов, чем «нативные»",
        "correct": true
      },
      {
        "text": "среда Intel XDK не работает с мультисенсорностью",
        "correct": false
      },
      {
        "text": "приложения html5 исполняются быстрее и требуют меньше ресурсов, чем «нативные»",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод класса MediaPlayer запускает воспроизведение медиаконтента?",
    "answers": [
      {
        "text": "create ()",
        "correct": false
      },
      {
        "text": " start ()",
        "correct": true
      },
      {
        "text": "begin ()",
        "correct": false
      },
      {
        "text": "playback ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Выберите верные утверждения относительно объекта-намерения (Intent).",
    "answers": [
      {
        "text": "используется для передачи сообщений пользователю",
        "correct": false
      },
      {
        "text": " используются для передачи сообщений между основными компонентами приложений",
        "correct": true
      },
      {
        "text": "используется для получения инструкций от пользователя",
        "correct": false
      },
      {
        "text": " представляет собой структуру данных, содержащую описание операции, которая должна быть выполнена, и обычно используется для запуска активности или сервиса",
        "correct": true
      }
    ]
  },
  {
    "question": "С какой целью может быть использован SQLiteOpenHelper?",
    "answers": [
      {
        "text": " для создания базы данных",
        "correct": true
      },
      {
        "text": "для выполнения запросов к базе данных",
        "correct": false
      },
      {
        "text": " для обновления базы данных",
        "correct": true
      },
      {
        "text": "для вызова справочной системы по базе данных",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой метод используется для рассылки объектов-намерений, получаемых приемниками широковещательных сообщений?",
    "answers": [
      {
        "text": " sendBroadcast ()",
        "correct": true
      },
      {
        "text": "takeBroadcast ()",
        "correct": false
      },
      {
        "text": "passBroadcast ()",
        "correct": false
      },
      {
        "text": "carryBroadcast ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Переключения между активностями осуществляются",
    "answers": [
      {
        "text": "только при помощи кнопок и других элементов управления",
        "correct": false
      },
      {
        "text": " все три варианта возможны",
        "correct": true
      },
      {
        "text": "только с использованием сенсорного экрана смартфона",
        "correct": false
      },
      {
        "text": "только при помощи кнопок",
        "correct": false
      }
    ]
  },
  {
    "question": "С помощью какого флага можно запретить устройству гасить экран при запущенном приложении?",
    "answers": [
      {
        "text": "FLAG_LIGHT_ON",
        "correct": false
      },
      {
        "text": " FLAG_KEEP_SCREEN_ON",
        "correct": true
      },
      {
        "text": "FLAG_KEEP_SCREEN_ENABLE",
        "correct": false
      },
      {
        "text": "FLAG_SLEEP_DISABLE",
        "correct": false
      }
    ]
  },
  {
    "question": "К датчикам окружающей среды, встроенным в мобильное устройство относят",
    "answers": [
      {
        "text": "датчики вектора вращения",
        "correct": false
      },
      {
        "text": "акселерометры",
        "correct": false
      },
      {
        "text": "гироскопы",
        "correct": false
      },
      {
        "text": " датчики освещенности",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой компонент архитектуры Android позволяет любому приложению использовать уже реализованные возможности других приложений, к которым разрешен доступ?",
    "answers": [
      {
        "text": "Libraries & Android Runtime",
        "correct": false
      },
      {
        "text": "Linux Kernel",
        "correct": false
      },
      {
        "text": "Applications",
        "correct": false
      },
      {
        "text": " Application Framework",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие библиотеки позволяют использовать возможности, появившиеся в какой-то версии ОС Android, на более ранних версиях платформы?",
    "answers": [
      {
        "text": "библиотеки, использующиеся совместно",
        "correct": false
      },
      {
        "text": "библиотеки специального назначения",
        "correct": false
      },
      {
        "text": "библиотеки, предоставляющие дополнительные возможности",
        "correct": false
      },
      {
        "text": " библиотеки совместимости",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой элемент используется для отображения анимации?",
    "answers": [
      {
        "text": "AnimationWindow",
        "correct": false
      },
      {
        "text": " ImageView",
        "correct": true
      },
      {
        "text": "AnimationBox",
        "correct": false
      },
      {
        "text": "AnimationView",
        "correct": false
      }
    ]
  },
  {
    "question": "Выберите несуществующий параметр элемента меню",
    "answers": [
      {
        "text": " Background",
        "correct": true
      },
      {
        "text": "Title",
        "correct": false
      },
      {
        "text": "Visible",
        "correct": false
      },
      {
        "text": "Icon",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой root element нужно выбрать при создании xml-файла для анимации?",
    "answers": [
      {
        "text": "clip",
        "correct": false
      },
      {
        "text": "bitmap",
        "correct": false
      },
      {
        "text": " animation-list",
        "correct": true
      },
      {
        "text": "сolor",
        "correct": false
      }
    ]
  },
  {
    "question": "Назовите Layout, который мы не можем использовать при создании виджета",
    "answers": [
      {
        "text": "Frame",
        "correct": false
      },
      {
        "text": "Linear",
        "correct": false
      },
      {
        "text": " Table",
        "correct": true
      },
      {
        "text": "Relative",
        "correct": false
      }
    ]
  },
  {
    "question": "Зачем при использовании метода getText на элементе EditText мы добавляет toString?",
    "answers": [
      {
        "text": " чтобы получить строковое значение текста",
        "correct": true
      },
      {
        "text": "данная команда отправляет текст в переменную String, например toString (stringVariable)",
        "correct": false
      },
      {
        "text": "toString передает содержимое EditText в строку под определенным номером, например toString (3)",
        "correct": false
      },
      {
        "text": "чтобы отправить текст данного окна в string. xml",
        "correct": false
      }
    ]
  },
  {
    "question": "По умолчанию в новом проекте присутствует код, определяющий внешний вид запускаемого Activity в. java файле, это:",
    "answers": [
      {
        "text": "SetAppearance",
        "correct": false
      },
      {
        "text": "super. OnCreate",
        "correct": false
      },
      {
        "text": "import",
        "correct": false
      },
      {
        "text": " setContentView",
        "correct": true
      }
    ]
  },
  {
    "question": "Какого вида Layout не существует в Android?",
    "answers": [
      {
        "text": "Frame",
        "correct": false
      },
      {
        "text": " Creative",
        "correct": true
      },
      {
        "text": "Table",
        "correct": false
      },
      {
        "text": "Relative",
        "correct": false
      }
    ]
  },
  {
    "question": "Как называется окно, отображающее сообщения дебаггера?",
    "answers": [
      {
        "text": "DebugMsger",
        "correct": false
      },
      {
        "text": " Logcat",
        "correct": true
      },
      {
        "text": "LogViewer",
        "correct": false
      }
    ]
  },
  {
    "question": "Для того, чтобы получать результат после выполнения Activity используется:",
    "answers": [
      {
        "text": "startAction",
        "correct": false
      },
      {
        "text": " startActivityForResult",
        "correct": true
      },
      {
        "text": "OnActivityResult",
        "correct": false
      },
      {
        "text": "OnActionResult",
        "correct": false
      }
    ]
  },
  {
    "question": "Для чего используется инструмент 9patch?",
    "answers": [
      {
        "text": "для модификации приложения",
        "correct": false
      },
      {
        "text": "для создания обновлений-патчей для нашего приложения",
        "correct": false
      },
      {
        "text": "для проверки версии приложения",
        "correct": false
      },
      {
        "text": " для обработки изображений",
        "correct": true
      }
    ]
  },
  {
    "question": "Выберите строку с верным синтаксисом:",
    "answers": [
      {
        "text": " for (int i=0;i <X; i++)",
        "correct": true
      },
      {
        "text": "for (int i=0;X; i++)",
        "correct": false
      },
      {
        "text": "for (int i=0;i <X; i=1)",
        "correct": false
      },
      {
        "text": "for (int i=0;X; i=1)",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой элемент нужно добавить первым при создании списка в xml-файле?",
    "answers": [
      {
        "text": "String",
        "correct": false
      },
      {
        "text": " String Array",
        "correct": true
      },
      {
        "text": "Integer Array",
        "correct": false
      },
      {
        "text": "Style/Theme",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой из нижеприведенных операторов является оператором задачи цикла?",
    "answers": [
      {
        "text": " while",
        "correct": true
      },
      {
        "text": "try",
        "correct": false
      },
      {
        "text": "begin",
        "correct": false
      },
      {
        "text": "if",
        "correct": false
      }
    ]
  },
  {
    "question": "Можно ли просмотреть Log-сообщения после компиляции приложения?",
    "answers": [
      {
        "text": "да, но только с помощью дебаггера",
        "correct": false
      },
      {
        "text": " да, если их не удалили\\закомментировали",
        "correct": true
      },
      {
        "text": "да, даже если их закомментировали",
        "correct": false
      },
      {
        "text": "нет, даже если они остались в коде",
        "correct": false
      }
    ]
  },
  {
    "question": "Для чего используются папки drawable ldpi, mdpi, hdpi и xhdpi?",
    "answers": [
      {
        "text": "для хранения картинок в разных форматах",
        "correct": false
      },
      {
        "text": "для хранения картинок разных размеров, маленькие нужно класть только в ldpi, чуть больше – в mdpi и тд, иначе Android не сможет их отображать",
        "correct": false
      },
      {
        "text": "для удобства. Никаких функциональных особенностей",
        "correct": false
      },
      {
        "text": " для использования разных файлов изображений в зависимости от размеров экрана",
        "correct": true
      }
    ]
  },
  {
    "question": "В каком xml-файле по умолчанию содержится текстовое содержимое элементов пользовательского интерфейса?",
    "answers": [
      {
        "text": "styles. xml",
        "correct": false
      },
      {
        "text": "lines. xml",
        "correct": false
      },
      {
        "text": " strings. xml",
        "correct": true
      },
      {
        "text": "Text. xml",
        "correct": false
      }
    ]
  },
  {
    "question": "Использование FindViewByID",
    "answers": [
      {
        "text": "не характерно для Android-разработки",
        "correct": false
      },
      {
        "text": " позволяет обращаться к созданному элементу интерфейса",
        "correct": true
      },
      {
        "text": "устанавливает внешний вид для Activity",
        "correct": false
      },
      {
        "text": " позволяет получить объект из xml-разметки",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой оператор позволяет задавать условия?",
    "answers": [
      {
        "text": " if… else if",
        "correct": true
      },
      {
        "text": "if… or if",
        "correct": false
      },
      {
        "text": "if… what if",
        "correct": false
      },
      {
        "text": "if… Then",
        "correct": false
      }
    ]
  },
  {
    "question": "Как выглядит папка, содержащая видоизмененный Layout?",
    "answers": [
      {
        "text": "/res/ <mod> – layout",
        "correct": false
      },
      {
        "text": "/res/layout <mod>",
        "correct": false
      },
      {
        "text": "/res/layout/ <mod> /",
        "correct": false
      },
      {
        "text": " /res/layout– <mod>",
        "correct": true
      }
    ]
  },
  {
    "question": "Почему после execSQL мы используем синтаксис заглавными буквами в кавычках?",
    "answers": [
      {
        "text": "потому что это содержимое нашей таблицы\\базы",
        "correct": false
      },
      {
        "text": " это код SQL",
        "correct": true
      },
      {
        "text": "особенность программирования на Java",
        "correct": false
      },
      {
        "text": "данный код был заимствован из PHP",
        "correct": false
      }
    ]
  },
  {
    "question": "За что отвечает опция Solid при создании новой фигуры?",
    "answers": [
      {
        "text": "за непрозрачность",
        "correct": false
      },
      {
        "text": "за глубину цвета",
        "correct": false
      },
      {
        "text": " за заливку",
        "correct": true
      },
      {
        "text": "за целостность",
        "correct": false
      }
    ]
  },
  {
    "question": "WebView myWebView = (WebView) findViewById (R. id. webview); myWebView. loadUrl {»http://www.example.com\"); Как убедиться в работоспособности кода?",
    "answers": [
      {
        "text": "добавить логическую переменную вторым аргументом метода loadUrl ()",
        "correct": false
      },
      {
        "text": "вызвать метод myWebView. show ()",
        "correct": false
      },
      {
        "text": " обавить в файл манифеста разрешение android. permission. INTERNET",
        "correct": true
      },
      {
        "text": "обратиться к методу myWebView. reload () после кода",
        "correct": false
      },
      {
        "text": "добавить разрешение android. permission. ALLOW_WEBVIEW в файл манифеста",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо проверить имеет ли вызываемый процесс разрешение для программного доступа к сервису. Что для этого используется?",
    "answers": [
      {
        "text": " Context. checkCallingPermission ()",
        "correct": true
      },
      {
        "text": "Context. checkCallerPermissions ()",
        "correct": false
      },
      {
        "text": "Security. validateCallingContext ()",
        "correct": false
      },
      {
        "text": "Process. validatePermission ()",
        "correct": false
      },
      {
        "text": "Process. checkCaller ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Реализован простой класс, осуществляющий SQLiteOpenHelper. Также данный класс содержит методы для выполнения различных операций с базами данных, таких как создание записей клиентов. Большинство операций используют простой метод execSQL (). Однако существует более сложная операция, требующая псевдонимы столбцов. Какой класс может быть использован для создания более сложных SQL запросов?",
    "answers": [
      {
        "text": "ExtendedQueryBuilder",
        "correct": false
      },
      {
        "text": "SQLiteComplexQuery",
        "correct": false
      },
      {
        "text": "ComplexQueryHelper",
        "correct": false
      },
      {
        "text": " SQLiteQueryBuilder",
        "correct": true
      },
      {
        "text": "EnhancedSQLiteQuery",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы просматриваете результаты трассировки вашего приложения. Приложение создает потоки, чтобы справиться с интенсивно-вычислительной работой. Вы знаете, что приложение создает несколько потоков в течение определенного времени, однако в результатах трассировки видите только один. Что вызывает данную проблему?",
    "answers": [
      {
        "text": " VM использует ID потока, который и отображается в процессе трассировки",
        "correct": true
      },
      {
        "text": "приоритет потоков не определен, из-за чего один из них блокируется при трассировке",
        "correct": false
      },
      {
        "text": "трассировка не может засечь более одного потока в одно и то же время",
        "correct": false
      },
      {
        "text": "потоки выполняются очень быстро, и трассировка не может засечь каждый",
        "correct": false
      },
      {
        "text": "VM экономит ресурсы, объединяя несколько потоков в один",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы просматриваете результаты трассировки вашего приложения. Приложение создает потоки, чтобы справиться с интенсивно-вычислительной работой. Вы знаете, что приложение создает несколько потоков в течение определенного времени, однако в результатах трассировки видите только один. Что вызывает данную проблему?",
    "answers": [
      {
        "text": " VM использует ID потока, который и отображается в процессе трассировки",
        "correct": true
      },
      {
        "text": "приоритет потоков не определен, из-за чего один из них блокируется при трассировке",
        "correct": false
      },
      {
        "text": "потоки выполняются очень быстро, и трассировка не может засечь каждый",
        "correct": false
      },
      {
        "text": "VM экономит ресурсы, объединяя несколько потоков в один",
        "correct": false
      }
    ]
  },
  {
    "question": "Приложение пытается соединиться со службой другого разработчика. Код, отвечающий за освобождение ресурсов, отсутствует. Во время теста приложение отключается из-за недостаточного количества ресурсов. Проблема возникла из-за того, что вы не вызвали:",
    "answers": [
      {
        "text": "completeService ()",
        "correct": false
      },
      {
        "text": "releaseService ()",
        "correct": false
      },
      {
        "text": "stopService ()",
        "correct": false
      },
      {
        "text": " unbindService ()",
        "correct": true
      },
      {
        "text": "destroyService ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Действие в приложении запускается, если указано полное имя класса в Intents, и не запускается во всех остальных случаях. Как неявно убедиться в том, что действие будет запущено?",
    "answers": [
      {
        "text": " добавить фильтр действия в файле AndroidManifest. xml",
        "correct": true
      },
      {
        "text": "убедиться, что действие является расширением класса LaunchableActivityдобавить разрешение ACTIVITY_IMPLICITLY_LAUNCHABLE в файл AndroidManifest. xml",
        "correct": false
      },
      {
        "text": "вызвать setLaunchable (true) в методе действия onCreate ()",
        "correct": false
      },
      {
        "text": "передать ключевое значение «implicitLaunch: true» в Intent, используя запущенное действие",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы работаете с главным действием приложения. Требуется, чтобы действие, запускаемое после главного, было не во весь экран. Как этого добиться?",
    "answers": [
      {
        "text": "передать значение ИСТИНА в качестве второго аргумента конструктора Intent",
        "correct": false
      },
      {
        "text": " установить для второго действия android: theme=''@android: style/Theme. Dialog»",
        "correct": true
      },
      {
        "text": "установить флаг ACTION_LAUNCH_DIALOG для запуска второго действия",
        "correct": false
      },
      {
        "text": "для запуска второго действия вызвать метод startActivityAsDialog ()",
        "correct": false
      },
      {
        "text": "убедиться, что для поля второго действия параметр AS_DIALOG установлено значение ИСТИНА",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие четыре типа диалоговых окон есть в Android?",
    "answers": [
      {
        "text": " Alert, Progress, DatePicker, TimePicker",
        "correct": true
      },
      {
        "text": "Feedback, Progress, DateTimePicker, Input",
        "correct": false
      },
      {
        "text": "TextInput, Feedback, DataPicker, Toaster",
        "correct": false
      },
      {
        "text": "Message, Progress, DatePicker, TimePicker",
        "correct": false
      },
      {
        "text": "Immediate, Deferred, DataReciever, Progress",
        "correct": false
      }
    ]
  },
  {
    "question": "В проект импортированы файлы, которые размещены в папке /assets. Однако приложению нельзя ссылаться на данные файлы, используя сгенерированный файл R. java. Файлы можно сделать доступными приложению, если:",
    "answers": [
      {
        "text": "запустить перепостроение в среде Eclipse",
        "correct": false
      },
      {
        "text": "переместить файлы в папку /bin",
        "correct": false
      },
      {
        "text": " написать код, разрешающий доступ к файлам напрямую",
        "correct": true
      },
      {
        "text": "обновить свойства проекта, установив dataFiles=true",
        "correct": false
      },
      {
        "text": "отредактировать R. java и заставить файл ссылаться на себя",
        "correct": false
      }
    ]
  },
  {
    "question": "Требуется определить, разрешается ли пакету com.company. app начать телефонный звонок без обращения к Диалоговому интерфейсу. Какой фрагмент кода может быть использован для этого?",
    "answers": [
      {
        "text": "PackageManager.get(''com.company. app»). validatePermission («android. permission. CALL_PHONE»);",
        "correct": false
      },
      {
        "text": "context.checkPermission(''com.company. app», «android. permission. CALL_PHONE»);context. getPackageManager (). checkPermission («android. permission. MODIFY_PHONE_STATE», ''com.company. app»);",
        "correct": false
      },
      {
        "text": "context.getPackageManager(). checkPermission(''com.company. app», «android. permission. MODIFY_PHONE_STATE»);",
        "correct": false
      },
      {
        "text": " context. getPackageManager (). checkPermission («android. permission. CALL_PHONE», ''com.company. app»);",
        "correct": true
      }
    ]
  },
  {
    "question": "Что произойдет в том случае, если элемент <application> и элемент потомок <activity> имеют атрибуты иконок и меток?",
    "answers": [
      {
        "text": " значения <activity> переопределяют значения <application>",
        "correct": true
      },
      {
        "text": "из-за двусмысленных значений при компиляции будет выдано сообщение об ошибке",
        "correct": false
      },
      {
        "text": "ни одно значение не сможет быть использовано, так как Android не может определить, какое будет иметь приоритет",
        "correct": false
      },
      {
        "text": "из-за двусмысленных значений во время выполнения будет выдана ошибказначения <activity> всегда игнорируются",
        "correct": false
      }
    ]
  },
  {
    "question": "Если пользователи жалуются на то, что во время сохранения данных на удаленном сервере быстро заканчивается батарея, разработчик должен убедиться в том, что приложение не:",
    "answers": [
      {
        "text": "создаются несколько контент-провайдеров и каждому необходимо соединение",
        "correct": false
      },
      {
        "text": "используются фрагменты, в силу того, что UI зависит от сокетов",
        "correct": false
      },
      {
        "text": "пытается соединиться с альтернативным сайтом, находящимся на большом расстоянии от устройства",
        "correct": false
      },
      {
        "text": "запрашивает низкоскоростное соединение, когда доступно высокоскоростное",
        "correct": false
      },
      {
        "text": " постоянно повторяются неудавшиеся операции",
        "correct": true
      }
    ]
  },
  {
    "question": "Какой метод не участвует в жизненном цикле Activity",
    "answers": [
      {
        "text": "onDestroy ()",
        "correct": false
      },
      {
        "text": "onPause ()",
        "correct": false
      },
      {
        "text": " onSaveInstanceState ()",
        "correct": true
      },
      {
        "text": "onCreate ()",
        "correct": false
      },
      {
        "text": "onRestart ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо отобразить данные контент-провайдера в ListView. Какую колонку нужно вернуть как часть записи контент-провайдера?",
    "answers": [
      {
        "text": "key",
        "correct": false
      },
      {
        "text": "uniqueID",
        "correct": false
      },
      {
        "text": " _ID",
        "correct": true
      },
      {
        "text": "_Index",
        "correct": false
      },
      {
        "text": "_COUNT",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая команда используется для просмотра результатов отладки?",
    "answers": [
      {
        "text": " traceview",
        "correct": true
      },
      {
        "text": "logcat",
        "correct": false
      },
      {
        "text": "outview",
        "correct": false
      },
      {
        "text": "adblog",
        "correct": false
      },
      {
        "text": "tailer",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы работаете с кодом, использующим базу данных SQLite. SQL запросы не возвращают ожидаемых значений. Необходимо проверить некорректные данные и структуры таблиц, когда приложение будет запущено в режиме эмулятора. Какой инструмент вы используете для устранения неполадок базы данных?",
    "answers": [
      {
        "text": "sltool",
        "correct": false
      },
      {
        "text": "sqlite3debug",
        "correct": false
      },
      {
        "text": " sqlite3",
        "correct": true
      },
      {
        "text": "sqliteviewer",
        "correct": false
      },
      {
        "text": "sqlitedump",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо создать образ SD карты с файловой системой FAT32, который может быть протестирован на устройствах с различными конфигурациями. Какая программа позволит создать данный образ?",
    "answers": [
      {
        "text": "mksdimg",
        "correct": false
      },
      {
        "text": "mksdcard",
        "correct": false
      },
      {
        "text": "fat32img",
        "correct": false
      },
      {
        "text": " makefat32img",
        "correct": true
      },
      {
        "text": "sdcard",
        "correct": false
      }
    ]
  },
  {
    "question": "Действие A запускает B, которое запускает C. Действие A работает вместо B, когда пользователь нажимает кнопку назад из действия C. Какой флаг может быть использован для проверки того, что A работает вместо B?",
    "answers": [
      {
        "text": " FLAG_ACTIVITY_NO_HISTORY",
        "correct": true
      },
      {
        "text": "FLAG_ACTIVITY_SKIP",
        "correct": false
      },
      {
        "text": "FLAG_ACTIVITY_IGNORE",
        "correct": false
      },
      {
        "text": "FLAG_ACTIVITY_NO_BACK",
        "correct": false
      },
      {
        "text": " FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS",
        "correct": true
      }
    ]
  },
  {
    "question": "При попытке вставки данных с клавиатуры, создаются объекты ClipData, запрашивающие:",
    "answers": [
      {
        "text": "bytestream",
        "correct": false
      },
      {
        "text": "cluster identifier",
        "correct": false
      },
      {
        "text": "class hierarchy",
        "correct": false
      },
      {
        "text": " MIME type",
        "correct": true
      },
      {
        "text": "Intent",
        "correct": false
      }
    ]
  },
  {
    "question": "Создается пользовательский интерфейс. Необходимо использовать макет, который позволит указывать отношения между элементами предками и потомками. Какой макет необходимо использовать?",
    "answers": [
      {
        "text": "AbsoluteLayout",
        "correct": false
      },
      {
        "text": "TableLayout",
        "correct": false
      },
      {
        "text": "FrameLayout",
        "correct": false
      },
      {
        "text": "LinearLayout",
        "correct": false
      },
      {
        "text": " RelativeLayout",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие макеты допускается использовать при разработке виджетов для рабочего стола?",
    "answers": [
      {
        "text": "RelativeLayout, FrameLayout, и BorderLayout",
        "correct": false
      },
      {
        "text": "FrameLayout, LinearLayout, и RelativeLayout",
        "correct": false
      },
      {
        "text": "AbsoluteLayout, LinearLayout, и TableLayout",
        "correct": false
      },
      {
        "text": " FrameLayout, LinearLayout, и TableLayout",
        "correct": true
      },
      {
        "text": "AbsoluteLayout, LinearLayout, и TableLayout",
        "correct": false
      }
    ]
  },
  {
    "question": "Нужно осуществить разрешение для URI контент-провайдера. Вы хотите указать путь, начинающийся с /contacts/. Какую конфигурацию для вашей службы необходимо поместить в файл AndroidManifest. xml?",
    "answers": [
      {
        "text": "<grant-uri-permission android: path=''/contact/*'' />",
        "correct": false
      },
      {
        "text": " <grant-uri-permission android: pathPrefix=''/'' path=«contacts» />",
        "correct": true
      },
      {
        "text": "<add-uri-permission android: pathPrefix=''/contact/*'' />",
        "correct": false
      },
      {
        "text": "<grant-uri-permission android: pathPrefix=''/contact/*'' />",
        "correct": false
      },
      {
        "text": "<add-uri-permission android: path=''/contact/*'' />",
        "correct": false
      }
    ]
  },
  {
    "question": "Одиночное действие должно быть определено в файле AndroidManifest. xml и доступно под двумя названиями, с двумя отдельными наборами фильтров. Какой атрибут для этого используется?",
    "answers": [
      {
        "text": "<secondary-name>",
        "correct": false
      },
      {
        "text": "<copy-activity>",
        "correct": false
      },
      {
        "text": " <alternate-name>",
        "correct": true
      },
      {
        "text": "<activity-alias>",
        "correct": false
      },
      {
        "text": "<alternate-alias>",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы представили обновленную версию приложения, которое опубликовано на Android market. Тем не менее, вы получаете сообщения, что, когда люди пытаются установить обновление, оно устанавливается в качестве нового приложения, а не как обновление. Что вызывает данную проблему?",
    "answers": [
      {
        "text": "разрешение ALLOW_UPDATE не прописано в файле AndroidManifest. xml",
        "correct": false
      },
      {
        "text": "имя приложения отличается от исходного",
        "correct": false
      },
      {
        "text": "для подписи файла обновления. apk используются различные сертификаты",
        "correct": false
      },
      {
        "text": " для подписи файла. apk используются различные версии ключей",
        "correct": true
      },
      {
        "text": "до публикации на APK не был запущен zipalign",
        "correct": false
      }
    ]
  },
  {
    "question": "Fragment должен быть всегда определен в:",
    "answers": [
      {
        "text": "LayoutManager",
        "correct": false
      },
      {
        "text": "ViewStub",
        "correct": false
      },
      {
        "text": "CompositeView",
        "correct": false
      },
      {
        "text": "Space",
        "correct": false
      },
      {
        "text": " ViewGroup",
        "correct": true
      }
    ]
  },
  {
    "question": "Виджет ListView получает сообщения от:",
    "answers": [
      {
        "text": "ContentProvider",
        "correct": false
      },
      {
        "text": "ListViewProvider",
        "correct": false
      },
      {
        "text": "ListDataManager",
        "correct": false
      },
      {
        "text": "DataAdapter",
        "correct": false
      },
      {
        "text": " ListAdapter",
        "correct": true
      }
    ]
  },
  {
    "question": "Для разделения приложений, Android присваивает каждому:",
    "answers": [
      {
        "text": "уникальный временной шифр",
        "correct": false
      },
      {
        "text": "отдельный ключ",
        "correct": false
      },
      {
        "text": " уникальный Linux ID",
        "correct": true
      },
      {
        "text": "GUID",
        "correct": false
      },
      {
        "text": "идентификатор, производный от имени библиотеки",
        "correct": false
      }
    ]
  },
  {
    "question": "Для того чтобы включать в приложение статические файлы и обращаться к ним во время работы программы, необходимо:",
    "answers": [
      {
        "text": "расположить в папке res/data и открывать с помощью openResource (R. raw (» <filename>»))",
        "correct": false
      },
      {
        "text": "сохранить в проекте и открыть с помощью openStream (» <path_and_filename>»)",
        "correct": false
      },
      {
        "text": " расположить в папке res/raw и открывать с помощью openRawResource (R. raw. <filename>)",
        "correct": true
      },
      {
        "text": "использовать инструмент datafile, чтобы закодировать в файл Java",
        "correct": false
      }
    ]
  },
  {
    "question": "String lc = context. getResources (). getConfiguration (). locale. getLanguage (); Что нужно заменить в коде, чтобы можно было использовать язык стандарта ISO?",
    "answers": [
      {
        "text": "getLanguage () на getISOLanguage ()",
        "correct": false
      },
      {
        "text": "getResources () на getISO3Resources ()",
        "correct": false
      },
      {
        "text": " getLanguage () на getISO3Language ()",
        "correct": true
      },
      {
        "text": "getConfiguration () на getISOConfiguration ()",
        "correct": false
      },
      {
        "text": "locale на iso3Locale",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо проверить имеет ли вызываемый процесс разрешение для программного доступа к сервису. Что для этого используется?",
    "answers": [
      {
        "text": " Context. checkCallingPermission ()",
        "correct": true
      },
      {
        "text": "Process. validatePermission ()",
        "correct": false
      },
      {
        "text": "Security. validateCallingContext ()",
        "correct": false
      },
      {
        "text": "Process. checkCaller ()",
        "correct": false
      },
      {
        "text": "Context. checkCallerPermissions ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо сохранить личные файлы, созданные в приложении. Нужен только список имен файлов. Какой метод необходимо использовать?",
    "answers": [
      {
        "text": "AssetManager. listPrivateFiles ()",
        "correct": false
      },
      {
        "text": "InputStream. listFiles ()",
        "correct": false
      },
      {
        "text": "Context. getFileNames ()",
        "correct": false
      },
      {
        "text": " Context. fileList ()",
        "correct": true
      },
      {
        "text": "File. getFiles ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какое из средств отладки вы используете, чтобы делать скриншоты приложений, запущенных на устройстве?",
    "answers": [
      {
        "text": "scrcap",
        "correct": false
      },
      {
        "text": "Monkey",
        "correct": false
      },
      {
        "text": "Dev Tools",
        "correct": false
      },
      {
        "text": " DDMS",
        "correct": true
      },
      {
        "text": "аdb",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой класс используется для отправки СМС-сообщений?",
    "answers": [
      {
        "text": "android. os. MessageManager",
        "correct": false
      },
      {
        "text": "dalvik. system. SmsGenerator",
        "correct": false
      },
      {
        "text": "android.net.SmsSender",
        "correct": false
      },
      {
        "text": " android. telephony. SmsManager",
        "correct": true
      },
      {
        "text": "java.net.SmsComm",
        "correct": false
      }
    ]
  },
  {
    "question": "Приложение становится менее производительным всякий раз, когда загружается фоновая служба. Данное приложение использует эту фоновую службу. Во время работы службы пользовательский интерфейс перестает отвечать. Почему страдает производительность приложения, когда работает данная служба?",
    "answers": [
      {
        "text": " стандартная обработка в Android производится в одном потоке",
        "correct": true
      },
      {
        "text": "в приложении не указаны соответствующие ограничения",
        "correct": false
      },
      {
        "text": "неверна цифровая подпись, используемая APK",
        "correct": false
      },
      {
        "text": "в приложении не запущен zipalign",
        "correct": false
      },
      {
        "text": "служба вызывает web – сервисы, однако система этого делать не позволяет",
        "correct": false
      }
    ]
  },
  {
    "question": "Вы устанавливаете меню в приложение. Вы создали XML файл mainMenu. xml и разместили его в папке assets/menu. Когда вы попытаетесь создать меню, используя getMenuInflater ().inflate (R. menu. mainMenu, viewGroup), меню не создается. Какое действие должно быть предпринято для устранения данной проблемы?",
    "answers": [
      {
        "text": "нужно передать значение ИСТИНА в качестве второго аргумента метода inflate ()",
        "correct": false
      },
      {
        "text": "нужно использовать класс MenuFileInflater вместо MenuInflater",
        "correct": false
      },
      {
        "text": "нужно вручную отредактировать R. java, чтобы добавить ссылку на XML file",
        "correct": false
      },
      {
        "text": " нужно переместить mainMenu. xml в папку res/menu",
        "correct": true
      },
      {
        "text": "нужно использовать inflateFromFile () вместо inflate ()",
        "correct": false
      }
    ]
  },
  {
    "question": "Какая последовательность обработчиков обратного вызова класса Activity выполняется сначала?",
    "answers": [
      {
        "text": "onCreate, onStart, onRunning",
        "correct": false
      },
      {
        "text": "onStart, onInit, onResume",
        "correct": false
      },
      {
        "text": "onPreInit, onCreate, onRunning",
        "correct": false
      },
      {
        "text": "onCreate, onRestart, onResume",
        "correct": false
      },
      {
        "text": " onCreate, onStart, onResume",
        "correct": true
      }
    ]
  },
  {
    "question": "Вы пытаетесь устранить неполадки приложения с помощью журнала регистрации. На выходе слишком много данных, которые могут быть использованы. Вы должны ограничить количество данных на выходе. Необходимо получить данные отладки от ActivityManager, а также от приложения (используется метка CustomerProcessor). Какие фильтры необходимо использовать для получения необходимых данных?",
    "answers": [
      {
        "text": " ActivityManager: I CustomerProcessor: D *:S",
        "correct": true
      },
      {
        "text": "ActivityManager (I) CustomerProcessor (D) * (S)",
        "correct": false
      },
      {
        "text": "ActivityManager=I CustomerProcessor=D",
        "correct": false
      },
      {
        "text": "ActivityManager=I CustomerProcessor=D",
        "correct": false
      },
      {
        "text": "– ActivityManager=info – CustomerProcessor=debug – All=silent",
        "correct": false
      },
      {
        "text": "ActivityManager: I CustomerProcessor:D",
        "correct": false
      }
    ]
  },
  {
    "question": "Необходимо отправить Intent так, чтобы оно продолжало существовать после передачи сообщения об успешном завершении. Данные должны быть доступны. Какой тип Intent должен быть использован?",
    "answers": [
      {
        "text": "Persistent",
        "correct": false
      },
      {
        "text": "Long-lived",
        "correct": false
      },
      {
        "text": " Sticky",
        "correct": true
      },
      {
        "text": "Cohesive",
        "correct": false
      },
      {
        "text": "Accessible",
        "correct": false
      }
    ]
  },
  {
    "question": "К стилям и темам, предлагаемым платформой Android, можно получить доступ через:",
    "answers": [
      {
        "text": "android/stlThm",
        "correct": false
      },
      {
        "text": " android. R. style",
        "correct": true
      },
      {
        "text": "R. styleThemes",
        "correct": false
      },
      {
        "text": "R. android. style_themes",
        "correct": false
      }
    ]
  },
  {
    "question": "Сколько уровней защиты есть в разрешениях?",
    "answers": [
      {
        "text": "Семь.",
        "correct": false
      },
      {
        "text": "Определяется пользователем.",
        "correct": false
      },
      {
        "text": " Четыре.",
        "correct": true
      },
      {
        "text": "Зависит от версии ОС Android.",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие разрешения предоставляются автоматически без одобрения пользователя?",
    "answers": [
      {
        "text": "Signature Permissions",
        "correct": false
      },
      {
        "text": "System Permissions",
        "correct": false
      },
      {
        "text": "Dangerous Permissions",
        "correct": false
      },
      {
        "text": " Normal Permission",
        "correct": true
      }
    ]
  },
  {
    "question": "Какие разрешения, перечисленные ниже, являются нормальными разрешениями?",
    "answers": [
      {
        "text": " SET_WALLPAPER",
        "correct": true
      },
      {
        "text": "READ_CALENDAR",
        "correct": false
      },
      {
        "text": "FACTORY_TEST",
        "correct": false
      },
      {
        "text": "REBOOT",
        "correct": false
      }
    ]
  },
  {
    "question": "Dangerous Permissions могут вызвать реальный вред или ущерб для пользователя в:",
    "answers": [
      {
        "text": "Данных",
        "correct": false
      },
      {
        "text": "Деньгах",
        "correct": false
      },
      {
        "text": "Устройстве",
        "correct": false
      },
      {
        "text": " Все варианты верны",
        "correct": true
      }
    ]
  },
  {
    "question": "Что из следующего верно о Android PROCESS_OUTGOING_CALLS разрешении?",
    "answers": [
      {
        "text": "Позволяет приложению доступ к журналу звонков.",
        "correct": false
      },
      {
        "text": " Позволяет приложению контролировать или прерывать исходящие вызовы",
        "correct": true
      },
      {
        "text": "Позволяет приложению записывать исходящие звонки",
        "correct": false
      },
      {
        "text": "Позволяет переадресовывать входящие звонки",
        "correct": false
      }
    ]
  },
  {
    "question": "Signature Permissions выдаются автоматически, если:",
    "answers": [
      {
        "text": " Запрашивающее приложение было подписано таким же сертификатом, что и приложение, которое заявило разрешение.",
        "correct": true
      },
      {
        "text": "Запрашивающее приложение было подписано таким же сертификатом, что и номер версии Android устройства.",
        "correct": false
      },
      {
        "text": "Запрашивающее приложение было подписано таким же сертификатом, что и образ системы Android",
        "correct": false
      },
      {
        "text": "Ничего из перечисленного.",
        "correct": false
      }
    ]
  },
  {
    "question": "Signature Permission также известно как:",
    "answers": [
      {
        "text": "Системное разрешение или разрешение третьего уровня",
        "correct": false
      },
      {
        "text": "Специальное разрешение ситуации",
        "correct": false
      },
      {
        "text": " Все перечисленное",
        "correct": true
      },
      {
        "text": "Ничего из перечисленного.",
        "correct": false
      }
    ]
  },
  {
    "question": "Какие из следующих разрешений являются наиболее опасными и могут привести к серьезному повреждению устройства?",
    "answers": [
      {
        "text": " BRICK",
        "correct": true
      },
      {
        "text": "REBOOT",
        "correct": false
      },
      {
        "text": "SHUTDOWN",
        "correct": false
      },
      {
        "text": "ACCESS_WIFI_STATE",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из следующего верно о разрешениях на уровне приложения?",
    "answers": [
      {
        "text": "Они необходимы, чтобы связаться с Android операционной системой.",
        "correct": false
      },
      {
        "text": " Они необходимы для приложения, чтобы выполнить работу.",
        "correct": true
      },
      {
        "text": "Они необходимы для создания приложения",
        "correct": false
      },
      {
        "text": "Они создаются автоматически.",
        "correct": false
      }
    ]
  },
  {
    "question": "Разрешения могут быть добавлены внутри:",
    "answers": [
      {
        "text": " AndroidManifest. xml.",
        "correct": true
      },
      {
        "text": "Layout. xml файла.",
        "correct": false
      },
      {
        "text": "Res папки.",
        "correct": false
      },
      {
        "text": "Bin папки.",
        "correct": false
      }
    ]
  },
  {
    "question": "Какой XML-тег применяется для того чтобы сделать использование защищенных функций устройства?",
    "answers": [
      {
        "text": "<uses sdk>",
        "correct": false
      },
      {
        "text": " <uses – permission>",
        "correct": true
      },
      {
        "text": "<application>",
        "correct": false
      },
      {
        "text": "<permission>",
        "correct": false
      }
    ]
  },
  {
    "question": "Приложение может отправить разрешения программно.",
    "answers": [
      {
        "text": "Зависит от разработчиков",
        "correct": false
      },
      {
        "text": "Да, но не все время",
        "correct": false
      },
      {
        "text": " Нет",
        "correct": true
      },
      {
        "text": "Да",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из следующего является Android-компонентом приложения, который может взаимодействовать с пользователем?",
    "answers": [
      {
        "text": " Activity",
        "correct": true
      },
      {
        "text": "Service",
        "correct": false
      },
      {
        "text": "Content Provider",
        "correct": false
      },
      {
        "text": "Broadcast Receivers",
        "correct": false
      }
    ]
  },
  {
    "question": "Когда разрешения применяются в активности?",
    "answers": [
      {
        "text": " Когда они загружаются методом Context. startActivity () или Context. startActivityForResult ().",
        "correct": true
      },
      {
        "text": "Когда вызывается метод Context. enforcepermission ().",
        "correct": false
      },
      {
        "text": "Когда вызывается метод Context. stopActivity ().",
        "correct": false
      },
      {
        "text": "Когда вызывается метод Context. checkPermission ().",
        "correct": false
      }
    ]
  },
  {
    "question": "Сервис это Android-компонент, который работает в фоновом режиме, чтобы выполнить фоновую задачу.",
    "answers": [
      {
        "text": " Да",
        "correct": true
      },
      {
        "text": "Нет",
        "correct": false
      },
      {
        "text": "Зависит от ситуации",
        "correct": false
      },
      {
        "text": "Сервис то не Android-компонент",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из следующего верно о контент-провайдерах Android?",
    "answers": [
      {
        "text": "Они используются для обмена данными между устройствами.",
        "correct": false
      },
      {
        "text": "Они используются для обмена данными между приложениями",
        "correct": false
      },
      {
        "text": " Они используются для обмена данными между приложениями, подписанных одним сертификатом",
        "correct": true
      },
      {
        "text": "Данные, считанные контент-провайдером удаляются при закрытии приложения",
        "correct": false
      }
    ]
  },
  {
    "question": "Разрешения Android могут быть расширены с помощью:",
    "answers": [
      {
        "text": "Использования ключевого слова «extends».",
        "correct": false
      },
      {
        "text": " Создания пользовательских разрешений в файле манифеста",
        "correct": true
      },
      {
        "text": "Разрешения не могут быть расширены",
        "correct": false
      },
      {
        "text": "Ничего из перечисленного.",
        "correct": false
      }
    ]
  },
  {
    "question": "Группа разрешений является концепцией создания:",
    "answers": [
      {
        "text": " Группы аналогичных разрешений.",
        "correct": true
      },
      {
        "text": "Группы всех разрешений в приложении.",
        "correct": false
      },
      {
        "text": "Группы всех компонентов в приложении",
        "correct": false
      },
      {
        "text": "Группы всех разрешений, независимо от приложения.",
        "correct": false
      }
    ]
  },
  {
    "question": "Нормальные разрешения могут быть преобразованы в пространство имен с помощью?",
    "answers": [
      {
        "text": "Группы разрешений",
        "correct": false
      },
      {
        "text": " Дерева разрешений",
        "correct": true
      },
      {
        "text": "Разрешения",
        "correct": false
      },
      {
        "text": "Выражения Import",
        "correct": false
      }
    ]
  },
  {
    "question": "Что является причиной для использования разрешений в разработке приложений?",
    "answers": [
      {
        "text": " для защиты данных и кода.",
        "correct": true
      },
      {
        "text": "Чтобы создать патент",
        "correct": false
      },
      {
        "text": "Чтобы сделать работу приложения лучше.",
        "correct": false
      },
      {
        "text": "Приложение не может быть создано без разрешений",
        "correct": false
      }
    ]
  },
  {
    "question": "К чему применяется разрешение уровня компонента?",
    "answers": [
      {
        "text": " Активность",
        "correct": true
      },
      {
        "text": "Группа разрешений",
        "correct": false
      },
      {
        "text": "Дерево разрешений",
        "correct": false
      },
      {
        "text": "Ничего из перечисленного",
        "correct": false
      }
    ]
  },
  {
    "question": "Что произойдет, если разрешение не применяется в приложении?",
    "answers": [
      {
        "text": "Приложение не может быть собрано.",
        "correct": false
      },
      {
        "text": "Приложение вернет ошибку времени выполнения",
        "correct": false
      },
      {
        "text": " Приложение не сможет получить доступ к системным ресурсам",
        "correct": true
      },
      {
        "text": "Приложение принудительно закроется.",
        "correct": false
      }
    ]
  },
  {
    "question": "Разрешения третьего уровня или signature permission и system permission используются для?",
    "answers": [
      {
        "text": " Интеграции системной сборки",
        "correct": true
      },
      {
        "text": "Доступа к системным ресурсам",
        "correct": false
      },
      {
        "text": "Доступа к опасным разрешениям",
        "correct": false
      },
      {
        "text": "Интеграции ресурсов в приложении",
        "correct": false
      }
    ]
  },
  {
    "question": "Что из следующего защищается разрешениями на уровне компонентов?",
    "answers": [
      {
        "text": "Приложение",
        "correct": false
      },
      {
        "text": "Компоненты",
        "correct": false
      },
      {
        "text": " Приложение и компоненты",
        "correct": true
      },
      {
        "text": "Ничего из перечисленного",
        "correct": false
      }
    ]
  }
]