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
                junior_grade: '初中',
                junior_class: '',
                senior_start_date: '',
                senior_grade: '高中',
                senior_class: '',
                company_name: '',
                company_type: '',
                pre_compay_name: '',
                company_position: '',
                company_office: '',
                teach_class: [],
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
                honour: '',
                pre_compay_name: '',
                demission_type: '',
                demission_date: '',
                department: '',
                position: ''
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
                // sNo: [
                //     { required: true, message: '此为必填项！',trigger: 'blur'}
                // ],
                tel: [
                    { required: true, message: '此为必填项！',trigger: 'blur' },
                    { min: 11, max: 11, message: '请填写11位有效电话号码！', trigger: 'blur' }
                ]
            },
            items: [
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
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    console.log('submit!');
                    
                    jsonData = {
                        name: value.name,
                        passwd: value.passwd,
                        checkPass: value.checkPass,
                        show_name: value.show_name,
                        sex: value.sex,
                        birthday: value.birthday,
                        role: value.role,
                        id_card: value.id_card,
                        tel: value.tel,
                        qq: value.qq,
                        email: value.email,
                        wechat: value.wechat,
                        home_address: value.home_address,
                        native_place: value.native_place,
                        politician: value.politician,
                        junior_start_date: value.junior_start_date,
                        junior_grade: value.junior_grade,
                        junior_class: value.junior_class,
                        senior_start_date: value.senior_start_date,
                        senior_grade: value.senior_grade,
                        senior_class: value.senior_class,
                        company_name: value.company_name,
                        company_type: value.company_type,
                        pre_compay_name: value.pre_compay_name,
                        company_position: value.company_position,
                        company_office: value.company_office,
                        teach_class: value.teach_class,
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
                        honour: value.honour,
                        pre_compay_name: value.pre_compay_name,
                        demission_type: value.demission_type,
                        demission_date: value.demission_date,
                        department: value.department,
                        position: value.position
                    };

                    
                    $.post(
                        // URL地址
                        'http://47.94.81.14:8088/register',
                        // 需要传的数据 需要把json格式，转化为json字符串  JSON.stringify()
                        {data: JSON.stringify(jsonData),token:localStorage.getItem("token")},
                        function (res){
                            // 返回值
                            console.log(res);
                            if (res.errno == '0'){
                                // 注册成功
                                data = {
                                    type: '#back',
                                    data: jsonData
                                }

                                jsToAppData(
                                    data , 
                                    function (res) {
                                        // 返回值 res
                                        console.log(res);
                                        //window.location.href = url;
                                    }
                                );
                            } else {
                                console.log('注册失败！');
                            }
                        }
                    )
                } else {
                    // 错误
                    console.log('error submit!!');
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
        datepicker: function (value){
            function GetQueryString(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  r?decodeURIComponent(r[2]):null;
            }
            var type = GetQueryString("type");
            var token = GetQueryString("token");
            var openid = GetQueryString("openid");
            var _this = this;
            //console.log(value.split('-')[0])
            //console.log(this.ruleForm.junior_grade)
            getclass();
            function getclass(){
                $.post(
                    'http://47.94.81.14:8088/updateaccountbaseinfo',
                    {token: localStorage.getItem("token"), year: value.split('-')[0], stage: _this.ruleForm.junior_grade},
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
        }
    },
    mounted(){
        // 确认身份信息 回填信息
		var token = localStorage.getItem("token");
		alert(token);
        getaccount();
        function getaccount(){
            $.post(
                'http://47.94.81.14:8088/getaccount?token='+token,
                function (res){
					alert(res.errmsg);
                    // 返回身份信息 并回填
                    if (res.errno == '0') {
                        // 先回填身份信息，
                        // 下面页面会根据回填的身份信息，展示相应身份的内容
                        // 然后，再回填其它信息
                        this.ruleForm.role = '教师（离职）';
                        this.ruleForm.show_name = "zkrt",
                        this.ruleForm.home_address = '中关村大厦';
                    }
                }
            );
        }
    }
})