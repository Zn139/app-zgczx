new Vue({
    el: "#app",
    data: function (){
        /*var validatePass = (rule, value, callback) => {
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
        };*/
        return {
            ruleForm: {
                //passwd: '',
                //checkPass: '',
                name: '',
                sex: '',
                birthday: '',
                role: '',
                id_card: '',
                tel: '',
                qq: '',
                wechat: '',
                email: '',
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
                hornor: '',
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
            items: [],
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
                        //passwd: value.passwd,
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
                        hornor: value.hornor,
                        pre_compay_name: value.pre_compay_name,
                        demission_type: value.demission_type,
                        demission_date: value.demission_date,
                        department: value.department,
                        position: value.position
                    };

                    console.log(jsonData)

                    function GetQueryString(name){
                        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                        var r = window.location.search.substr(1).match(reg);
                        if(r!=null)return  r?decodeURIComponent(r[2]):null;
                    }
                    var type = GetQueryString("type");
                    var token = GetQueryString("token");
                    var openid = GetQueryString("openid");

                    $.post(
                        'http://47.94.81.14:8088/updateaccountbaseinfo',
                        {data: JSON.stringify(jsonData), token: localStorage.getItem("token")},
                        function (res){
                            console.log('更新数据:::::::::::::::::::');
                            console.log(res);  
                            if (res.errno == '0'){
                                _this.$message({
                                    //showClose: true,
                                    message: '恭喜你，提交成功！',
                                    type: 'success',
                                    onClose: function (res){
                                        data = {
                                            type: '#back',
                                            data: jsonData
                                        }

                                        jsToAppData(data, function () {});
                                    }
                                }); 
                            } else {
                                _this.$message({
                                    //showClose: true,
                                    message: res.errmsg,
                                    type: 'error'
                                }); 
                            }
                        }
                    )
                } else {
                    _this.$message({
                        //showClose: true,
                        message: '对不起，提交失败！',
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
        datepicker: function (value){
            var _this = this;
                function GetQueryString(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  r?decodeURIComponent(r[2]):null;
            }
            var type = GetQueryString("type");
            var token = GetQueryString("token");
            var openid = GetQueryString("openid");
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
        function GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  r?decodeURIComponent(r[2]):null;
        }
        var type = GetQueryString("type");
        var token = GetQueryString("token");
        var openid = GetQueryString("openid");
        // 确认身份信息 回填信息
        var _this = this;
		var token1 = localStorage.getItem("token");
		
        getaccount();
        function getaccount(){
            $.post(
                'http://47.94.81.14:8088/getaccount?token='+token1,
                function (res){
                    // 返回身份信息 并回填
                    if (res.errno == '0') {
                        console.log('身份信息:::::::::::::::::::::::::::::');
                        console.log(res);
                        // 先回填身份信息，
                        // 下面页面会根据回填的身份信息，展示相应身份的内容
                        // 然后，再回填其它信息
                        var headimg = 'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=9eaaf88a6e600c33f02cd6ce2a7c7d37/f703738da977391246d2befffd198618377ae2bc.jpg';
                        
                        /*if (res.account.headimg == null) {
                            res.account.headimg = _this.headimg;
                        } else {
                            _this.headimg = '/'+res.account.headimg;
                        }*/
                        
                        _this.ruleForm.qq = res.account.qq ? res.account.qq : '';
                        _this.ruleForm.tel = res.account.tel ? res.account.tel : '';
                        _this.ruleForm.sex = res.account.sex ? res.account.sex : '';
                        _this.ruleForm.role = res.account.role ? res.account.role : '';
                        _this.ruleForm.name = res.account.name ? res.account.name : '';

                        _this.ruleForm.email = res.account.email ? res.account.email : '';
                        _this.ruleForm.wechat = res.account.wechat ? res.account.wechat  : '';
                        _this.ruleForm.id_card = res.account.id_card ? res.account.id_card : '';
                        _this.headimg = res.account.headimg ? '/' + res.account.headimg : headimg;
                        _this.ruleForm.show_name = res.account.show_name ? res.account.show_name : '';
                        _this.ruleForm.politician = res.account.politician ? res.account.politician : '';
                        _this.ruleForm.birthday = res.account.birthday ? new Date(res.account.birthday) : '';
                        _this.ruleForm.home_address = res.account.home_address ? res.account.home_address : '';
                        _this.ruleForm.native_place = res.account.native_place ? res.account.native_place.split(',') : [];
                    }
                }
            );
        }
        
    }
})