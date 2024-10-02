// Definir el modo personalizado para ARM64
CodeMirror.defineSimpleMode("arm64", {
    start: [
      // Palabras reservadas de ARM64, permitiendo mayúsculas o minúsculas
      {
        regex: /\b(?:MOV|LDR|STR|ADD|SUB|CMP|B|BL|BX|ADR|NOP|BR|SVC|STP|LDP|RET|CBZ|CBNZ|TBNZ|TBZ|AND|ORR|EOR|LSL|LSR|ASR|ROR|ADRP|LDUR|STUR|MUL|DIV|MVN|TST|CMN|LDRB|UXTB|STRB|SDIV|BLT|BEQ|ble|bne)\b/i,
        token: "keyword"
      },
      // Números hexadecimales, binarios, decimales y enteros
    // Números hexadecimales, binarios, decimales y enteros sin #
    {
     regex: /#?(?:0x[0-9a-fA-F]+|0b[01]+|\d+|-\d+)/,
      token: "number"
    }

    ,
      // Comentarios de una sola línea con @ o //
      {
        regex: /(?:@|\/\/).*/,
        token: "comment"
      },
      // Comentarios de varias líneas
      {
        regex: /\/\*/,
        token: "comment",
        next: "comment"
      },
      // Registros generales (X0-X30, W0-W30)
      {
        regex: /\b(?:X[0-9]{1,2}|W[0-9]{1,2})\b/i,
        token: "variable"
      },
      // Otros registros comunes (LR, PC, SP, FP, ZR)
      {
        regex: /\b(?:LR|PC|SP|FP|ZR)\b/i,
        token: "variable-2"
      },
      // Nombres de etiquetas (etiquetas de salto, terminadas con :)
      {
        regex: /[A-Za-z_][A-Za-z0-9_]*:?/,
        token: "def"
      },
      // Directivas (inician con un punto .)
      {
        regex: /\.\b(?:global|section|data|text|align|ascii|asciz|byte|half|word|quad)\b/i,
        token: "builtin"
      },
      // Texto o cualquier palabra que no termine con ':'
      {
        regex: /"([^"\\]*(\\.[^"\\]*)*)"/,
        token: "string"
    }
    
    ],
    
    // Modo para comentarios de varias líneas
    comment: [
      {
        regex: /.*?\*\//,
        token: "comment",
        next: "start"
      },
      {
        regex: /.*/,
        token: "comment"
      }
    ],
  
    meta: {
      lineComment: "@",  // También puedes usar "//" como carácter de comentario
      blockCommentStart: "/*",
      blockCommentEnd: "*/"
    }
  });
  