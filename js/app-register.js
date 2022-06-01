new Vue({
    el: "#app",
    data: function (){
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            /*pickerOptions1: {
                disabledDate (time) {
                    return time.getTime() > Date.now()
                }
            },
            pickerYear2: {
                disabledDate (time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },*/
            ruleForm: {
                passwd: '',
                checkPass: '',
                name: '',
                sex: '',
                birthday: '',
                role: '学生（在校）',
                id_card: '',
                tel: '',
                qq: '',
                email: '',	
                wechat: '',
                home_address: '',
                native_place: [],
                politician: '',
                junior_start_date: '',
                grade: '初中',
                junior_class: '',
                senior_start_date: '',
                grade2: '高中',
                senior_class: '',
                company_name: '',
                company_type: '',
                pre_compay_name: '',
                company_position: '',
                company_office: '',
                class: [],
                teach_class: '',
                isChecked: false,
                start_date: '',
                stage: '',
                course: '',
                is_main_tearcher: '',
                level: '',
                plait: '',
                top_school_type: '',
                top_school_name: '',
                top_school_major: '',
                qualification_certificate: '',
                qualification_certificate_no: '',
                hornor: '',
                pre_compay_name: '',
                demission_type: '',
                demission_date: '',
                department: '',
                position: '',
                entry: ''
            },
            // 简单的验证 vue自带的
            rules2: {
                name: [
                    { required: true, message: '此为必填项！', trigger: 'blur' }
                ],
                passwd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                show_name: [
                    { required: true, message: '此为必填项！', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符！', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '此为必填项！',trigger: 'blur' }
                ],
                birthday: [
                    { type: 'date', required: true, message: '此为必填项！',trigger: 'blur' }
                ],
                role: [
                    { required: true, message: '此为必填项！',trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '此为必填项！',trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
                ],
                id_card: [
                    //{ required: true, message: '此为必填项！',trigger: 'blur' },
                    { min: 18, max: 18, message: '请填写18位有效身份证号码！', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '此为必填项！',trigger: 'blur' },
                    { min: 11, max: 11, message: '请填写11位有效电话号码！', trigger: 'blur' }
                ]
            },
            items: [
                {}
            ],
            items2: [
                {}
            ],
            options2: [
                {
                    value: '初一',
                    label: '初一'
                }, {
                    value: '初二',
                    label: '初二'
                }, {
                    value: '初三',
                    label: '初三'
                }
            ],
            options: city(),
            headimg: '',
            isHidden: true
        }
    },
    methods: {
        submitForm: function (formName, value) {
            var _this = this;
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    console.log('submit!');
                    
                    jsonData = {
                        name: value.name,
                        passwd: value.passwd,//md5(value.passwd),
                        //checkPass: value.checkPass,
                        show_name: value.show_name,
                        sex: value.sex,
                        birthday: value.birthday,
                        role: value.role,
                        id_card: value.id_card,
                        tel: value.tel,
                        qq: value.qq,
                        email: value.email,
                        headimg: imgArr[0],
                        wechat: value.wechat,
                        home_address: value.home_address,
                        native_place: value.native_place.toString(),
                        politician: value.politician,
                        junior_start_date: value.junior_start_date,
                        //junior_grade: value.junior_grade,
                        grade: value.grade,
                        junior_class: value.junior_class,
                        senior_start_date: value.senior_start_date,
                        //senior_grade: value.senior_grade,
                        grade2: value.grade2,
                        senior_class: value.senior_class,
                        company_name: value.company_name,
                        company_type: value.company_type,
                        pre_compay_name: value.pre_compay_name,
                        company_position: value.company_position,
                        company_office: value.company_office,
                        teach_class: value.teach_class.toString(),
                        isChecked: false,
                        start_date: value.start_date,
                        stage: value.stage,
                        course: value.course,
                        is_main_tearcher: value.is_main_tearcher,
                        level: value.level,
                        plait: value.plait,
                        top_school_type: value.top_school_type,
                        top_school_name: value.top_school_name,
                        top_school_major: value.top_school_major,
                        qualification_certificate: value.qualification_certificate,
                        qualification_certificate_no: value.qualification_certificate_no,
                        hornor: value.hornor,
                        pre_compay_name: value.pre_compay_name,
                        demission_type: value.demission_type,
                        demission_date: value.demission_date,
                        department: value.department,
                        position: value.position,
                        entry: value.entry
                    };

                    console.log(jsonData)
                    
                    register();
                    function register(){
                        $.post(
                            'http://47.94.81.14:8088/register',
                            {data: JSON.stringify(jsonData)},
                            function (res){
                                // 返回值
                                console.log(res);
                                if (res.errno == '0'){
                                    _this.$message({
                                        //showClose: true,
                                        message: '恭喜你，注册成功！',
                                        type: 'success',
                                        onClose: function (res){
                                            // 注册成功
                                            data = {
                                                type: '#link',
                                                data: jsonData
                                            }

                                            jsToAppData(data, function (res) {
                                                console.log(res)
                                            });
                                        }
                                    });
                                    
                                } else {
                                    _this.$message({
                                        //showClose: true,
                                        message: res.errmsg,
                                        type: 'error',
                                        onClose: function (res){
                                            console.log(res)
                                        }
                                    }); 
                                }
                            }
                        )
                    }
                } else {
                    // 错误
                    _this.$message({
                        //showClose: true,
                        message: '对不起，注册失败！',
                        type: 'error'
                    }); 
                    return false;
                }
            });
        },
        resetForm: function (formName) {
            this.$refs[formName].resetFields();
        },
        handleAvatarSuccess: function (res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload: function (file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        addRow: function (value){
            this.isHidden = false;
        },
        removeRow: function (value){
            this.isHidden = true;
        },
        role: function (value) {
            this.ruleForm.role = value;
        },
        addItem: function (value){
            console.log(value.path[4])

        },
        removeItem: function (value){
            console.log(value)
        },
        nativePlace: function (value){
            console.log(value.toString())
        },
        changeGrade: function (value){
            console.log(value)
            var _this = this;
            this.ruleForm.junior_grade = value;
            getclass(token, this.ruleForm.junior_start_date, value);
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: token, year: year, stage: stage},
                    function (res){
                        console.log('班级::::::::::::::::::::::::;');
                        console.log(res);
                        var classname = [];
                        if (res.errno == '0'){
                            $.each(res.data, function (i, val){
                                classname.push({
                                    value: val.classname,
                                    label: val.classname
                                })
                            });
                            _this.items = classname;
                        }
                    }   
                );
            }
        },
        changeGrade2: function (value){
            console.log(value)
            var _this = this;
            this.ruleForm.senior_grade = value;
            getclass(token, this.ruleForm.senior_start_date, value);
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: token, year: year, stage: stage},
                    function (res){
                        console.log('班级::::::::::::::::::::::::2222');
                        console.log(res);
                        var classname = [];
                        if (res.errno == '0'){
                            $.each(res.data, function (i, val){
                                classname.push({
                                    value: val.classname,
                                    label: val.classname
                                })
                            });
                            _this.items2 = classname;
                        }
                    }   
                );
            }
        },
        datepicker: function (value){
            var _this = this;
            this.ruleForm.junior_start_date = value;
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: token, year: year, stage: stage},
                    function (res){
                        console.log('班级::::::::::::::::::::::::;');
                        console.log(res);
                        var classname = [];
                        if (res.errno == '0'){
                            $.each(res.data, function (i, val){
                                classname.push({
                                    value: val.classname,
                                    label: val.classname
                                })
                            });
                            _this.items = classname;
                        }
                    }   
                );
            }
            getclass(token, value, this.ruleForm.grade);
        },
        datepicker2: function (value){
            var _this = this;
            this.ruleForm.senior_start_date = value;
            getclass(token, value, this.ruleForm.grade2);
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: token, year: year, stage: stage},
                    function (res){
                        console.log('班级::::::::::::::::::::::::;');
                        console.log(res);
                        var classname = [];
                        if (res.errno == '0'){
                            $.each(res.data, function (i, val){
                                classname.push({
                                    value: val.classname,
                                    label: val.classname
                                })
                            });
                            _this.items2 = classname;
                        }
                    }   
                );
            }
        }
    }
})