class Operation extends Expression {

    constructor(line, col, id, name, inst, op1, op2, op3, op4, op5=null) {
        super();
        this.line = line;
        this.col = col;
        this.id = id;
        this.name = name;
        this.inst = inst?.replace(/[\n\t\s\r]+/g, '');
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
        this.op5 = op5;
    }


    execute(ast, env, gen) {
        // Cuádruplos forma temporal 1
        /* let temp = gen.newTemp();
        gen.addQuadruple(this.inst, this.op1, this.op2, this.op3, temp); */
        // Cúadruplos forma arm 2
        gen.addQuadruple(this.inst, this.op2, this.op3, this.op4,this.op5, this.op1);
    }
}