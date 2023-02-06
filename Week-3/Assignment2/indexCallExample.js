function hardwork(){
    var hussle = [
        this.name,
        ' works terribly hard on ',
        this.itField,
        'for',
        this.hours,
        'hours'].join(' ');
        console.log(hussle);
}

var hussleObj1 = {
    name: "tej",
    itField: "Full Stack",
    hours: "12"
};

var hussleObj2 = {
    name: "tej",
    itField: "zabbix Admin",
    hours: "12"
};

hardwork.call(hussleObj1);
hardwork.call(hussleObj2);