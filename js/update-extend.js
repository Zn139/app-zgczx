new Vue({
    el: "#app",
    data: function (){
        return {
            ruleForm: {
                passwd: '',
                checkPass: '',
                name: '',
                sex: '',
                birthday: '',
                role: '',
                id_card: '',
                tel: '',
                qq: '',
                email: '',
                wechat: '',
                home_address: '',
                native_place: '',
                politician: '',
                junior_start_date: '',
                grade: '初中',
                junior_class: '',
                senior_start_date: '',
                grade2: '高中',
                senior_class: '',
                company_name: '',
                company_type: '',
                pre_company_name: '',
                company_position: '',
                company_office: '',
                teach_class: '',
                isChecked: false,
                start_date: '',
                stage: '',
                course: '',
                is_main_tearcher: '',
                outschool: '',
                outdate: '',
                level: '',
                plait: '',
                top_school_type: '',
                top_school_name: '',
                top_school_major: '',
                qualification_certificate: '',
                qualification_certificate_no: '',
                hornor: '',
                pre_company_name: '',
                demission_type: '',
                demission_date: '',
                department: '',
                position: '',
                entry: '',
                student_study_junior_class_group: '',
                student_study_senior_class_group: '',
                student_graduate_junior_class_group: '',
                student_graduate_senior_class_group: ''

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
                id_card: [
                    { required: true, message: '此为必填项！',trigger: 'blur' },
                    { min: 18, max: 18, message: '请填写18位有效身份证号码！', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '此为必填项！',trigger: 'blur' },
                    { min: 11, max: 11, message: '请填写11位有效电话号码！', trigger: 'blur' }
                ]
            },
            items: [],
            items2: [],
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
                },{
                    value: '高一',
                    label: '高一'
                },{
                    value: '高二',
                    label: '高二'
                },{
                    value: '高三',
                    label: '高三'
                }
            ],
            options: city(),
            headimg: '',
            selectedData: '',
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
                        passwd: value.passwd,
                        checkPass: value.checkPass,
                        show_name: value.show_name,
                        sex: value.sex,
                        birthday: value.birthday,
                        role: value.role,
                        id_card: value.id_card,
                        tel: value.tel,
                        qq: value.qq,
                        headimg: imgArr[0],
                        wechat: value.wechat,
                        home_address: value.home_address,
                        native_place: value.native_place.toString(),
                        politician: value.politician,
                        junior_start_date: value.junior_start_date,
                        grade: value.grade,
                        junior_class: value.junior_class,
                        senior_start_date: value.senior_start_date,
                        grade2: value.grade2,
                        senior_class: value.senior_class,
                        company_name: value.company_name,
                        company_type: value.company_type,
                        pre_company_name: value.pre_company_name,
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
                        outschool: value.outschool,
                        outdate: value.outdate,
                        top_school_type: value.top_school_type,
                        top_school_name: value.top_school_name,
                        top_school_major: value.top_school_major,
                        qualification_certificate: value.qualification_certificate,
                        qualification_certificate_no: value.qualification_certificate_no,
                        hornor: value.hornor,
                        pre_company_name: value.pre_company_name,
                        demission_type: value.demission_type,
                        demission_date: value.demission_date,
                        department: value.department,
                        position: value.position,
                        entry: value.entry,
                        student_study_junior_class_group: value.student_study_junior_class_group,
                        student_study_senior_class_group: value.student_study_senior_class_group,
                        student_graduate_junior_class_group: value.student_graduate_junior_class_group,
                        student_graduate_senior_class_group: value.student_graduate_senior_class_group
                    };

                    console.log(jsonData);

                    updateaccountextendinfo();
                    function updateaccountextendinfo(){
                        $.post(
                            'http://47.94.81.14:8088/updateaccountextendinfo',
                            {data: JSON.stringify(jsonData), token: localStorage.getItem("token")},
                            function (res){
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
                    }
                } else {
                    // 错误
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
        teachClass: function (value){
            console.log(value.toString());
        },
        changeGrade: function (value){
            console.log(value)
            var _this = this;
            this.ruleForm.grade = value;
            getclass(token, this.ruleForm.junior_start_date, value);
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: localStorage.getItem("token"), year: year, stage: stage},
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
            this.ruleForm.grade2 = value;
            getclass(token, this.ruleForm.senior_start_date, value);
            function getclass(token, year, stage){
                $.post(
                    'http://47.94.81.14:8088/getclass',
                    {token: localStorage.getItem("token"), year: year, stage: stage},
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
                    {token: localStorage.getItem("token"), year: year, stage: stage},
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
                    {token: localStorage.getItem("token"), year: year, stage: stage},
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
    },
    mounted(){
        // 确认身份信息 回填信息
        var _this = this;
        function GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  r?decodeURIComponent(r[2]):null;
        }
        var type = GetQueryString("type");
        var token = GetQueryString("token");
        var openid = GetQueryString("openid");
		var token1 = localStorage.getItem("token");
        getaccount();
        function getaccount(){
            $.post(
                'http://47.94.81.14:8088/getaccount',
                {token: token1},
                function (res){
                    // 返回身份信息 并回填
                    console.log('身份信息:::::::::::::::::::::::::::::');
                    console.log(res);
                    if (res.errno == '0') {
                        // 先回填身份信息，
                        // 下面页面会根据回填的身份信息，展示相应身份的内容
                        // 然后，再回填其它信息
                        
                        var headimg = 'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=9eaaf88a6e600c33f02cd6ce2a7c7d37/f703738da977391246d2befffd198618377ae2bc.jpg';
                        
                        if (res.account.student_study_junior_class != '' && res.account.student_study_senior_class == ''){
                            _this.ruleForm.grade = '初中';
                        } else if (res.account.student_study_junior_class == '' && res.account.student_study_senior_class != '') {
                            _this.ruleForm.grade = '高中';
                        } else {
                            _this.ruleForm.grade = '';
                        }

                        if (res.account.student_study_junior_start_date){
                            _this.ruleForm.junior_start_date = res.account.student_study_junior_start_date.split('-')[0];
                        }

                        _this.items = [{
                            value: res.account.student_study_junior_class,
                            label: res.account.student_study_junior_class
                        }];
                        

                        _this.ruleForm.qq = res.account.qq ? res.account.qq : '';
                        _this.ruleForm.tel = res.account.tel ? res.account.tel : '';
                        _this.ruleForm.sex = res.account.sex ? res.account.sex : '';
                        _this.ruleForm.role = res.account.role ? res.account.role : '';
                        _this.ruleForm.name = res.account.name ? res.account.name : '';
                        _this.ruleForm.email = res.account.email ? res.account.email : '';
                        _this.ruleForm.hornor = res.account.hornor ? res.account.hornor : '';
                        _this.ruleForm.wechat = res.account.wechat ? res.account.wechat  : '';
                        _this.ruleForm.id_card = res.account.id_card ? res.account.id_card : '';
                        _this.headimg = res.account.headimg ? '/' + res.account.headimg : headimg;
                        _this.ruleForm.show_name = res.account.show_name ? res.account.show_name : '';
                        _this.ruleForm.politician = res.account.politician ? res.account.politician : '';
                        _this.ruleForm.birthday = res.account.birthday ? new Date(res.account.birthday) : '';
                        _this.ruleForm.home_address = res.account.home_address ? res.account.home_address : '';
                        _this.ruleForm.native_place = res.account.native_place ? res.account.native_place.split(',') : [];
                        
    
                        /*_this.ruleForm.name = res.account.name;
                        _this.ruleForm.id_card = res.account.id_card;
                        _this.ruleForm.show_name = res.account.show_name;
                        _this.ruleForm.role = res.account.role;
                        _this.ruleForm.tel = res.account.tel;
                        _this.ruleForm.sex = res.account.sex;
                        _this.ruleForm.birthday = new Date(res.account.birthday);
                        _this.ruleForm.qq = res.account.qq;
                        _this.ruleForm.wechat = res.account.wechat;
                        _this.ruleForm.home_address = res.account.home_address;
                        _this.ruleForm.politician = res.account.politician;
                        _this.ruleForm.native_place = eval(res.account.native_place);*/
                        
                        _this.ruleForm.student_study_junior_class_group = res.account.student_study_junior_class_group;
                        _this.ruleForm.student_study_senior_class_group = res.account.student_study_senior_class_group;
                        _this.ruleForm.student_graduate_junior_class_group = res.account.student_graduate_junior_class_group;
                        _this.ruleForm.student_graduate_senior_class_group = res.account.student_graduate_senior_class_group;
                        _this.headimg = '/'+res.account.headimg;
                        if (res.account.role == '学生（离校）'){
                            if (res.account.student_graducate_senior_class){
                                _this.isHidden = false;
                            } else {
                                _this.isHidden = true;
                            }
                            _this.ruleForm.grade = res.account.student_graducate_junior_class.indexOf('初中') != '-1' ? '初中' : '';
                            _this.ruleForm.junior_start_date = res.account.student_graducate_junior_start_date ? new Date(res.account.student_graducate_junior_start_date) : '';
                            _this.ruleForm.junior_class = res.account.student_graducate_junior_class ? res.account.student_graducate_junior_class : '';
                            _this.ruleForm.senior_start_date = res.account.student_graducate_senior_start_date ? new Date(res.account.student_graducate_senior_start_date) : '';
                            _this.ruleForm.senior_class = res.account.student_graducate_senior_class ? res.account.student_graducate_senior_class : '';
                            _this.ruleForm.company_name = res.account.student_graducate_company_name ? res.account.student_graducate_company_name : '';
                            _this.ruleForm.company_type = res.account.student_graducate_company_type ? res.account.student_graducate_company_type : '';
                            _this.ruleForm.company_position = res.account.student_graducate_company_position ? res.account.student_graducate_company_position : '';
                            _this.ruleForm.company_office = res.account.student_graducate_company_office ? res.account.student_graducate_company_office : '';
                            _this.ruleForm.top_school_type = res.account.student_graducate_top_school_type ? res.account.student_graducate_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.student_graducate_top_school_name ? res.account.student_graducate_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.student_graducate_top_school_major ? res.account.student_graducate_top_school_major : '';
                        } else if (res.account.role == '家长'){
                            _this.ruleForm.company_name = res.account.parent_company_name ? res.account.parent_company_name : '';
                            _this.ruleForm.company_type = res.account.parent_company_type ? res.account.parent_company_type : '';
                            _this.ruleForm.pre_company_name = res.account.pre_company_name ? res.account.pre_company_name : '';
                            _this.ruleForm.company_position = res.account.parent_company_position ? res.account.parent_company_position: '';
                            _this.ruleForm.company_office = res.account.parent_company_office ? res.account.parent_company_office : '';
                            _this.ruleForm.top_school_type = res.account.parent_top_school_type ? res.account.parent_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.parent_top_school_name ? res.account.parent_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.parent_top_school_major ? res.account.parent_top_school_major : '';
                        } else if (res.account.role == '教师（在职）'){
                            _this.ruleForm.pre_company_name = res.account.teacher_active_pre_company_name  ? res.account.teacher_active_pre_company_name  : '';
                            _this.ruleForm.company_position = res.account.teacher_active_pre_company_position ? res.account.teacher_active_pre_company_position : '';
                            _this.ruleForm.company_office = res.account.teacher_active_pre_company_level ? res.account.teacher_active_pre_company_level : '';
                            _this.ruleForm.start_date = res.account.teacher_active_start_date ? new Date(res.account.teacher_active_start_date) : '';
                            _this.ruleForm.stage = res.account.teacher_active_stage ? res.account.teacher_active_stage : '';
                            _this.ruleForm.course = res.account.teacher_active_course ? res.account.teacher_active_course : '';
                            _this.ruleForm.teach_class = res.account.teacher_active_class ? res.account.teacher_active_class.split(',') : '';
                            _this.ruleForm.level = res.account.teacher_active_level ? res.account.teacher_active_level : '';
                            _this.ruleForm.plait = res.account.teacher_active_plait ? res.account.teacher_active_plait : '';
                            _this.ruleForm.hornor = res.account.teacher_active_hornor ? res.account.teacher_active_hornor : '';
                            _this.ruleForm.top_school_type = res.account.teacher_active_top_school_type ? res.account.teacher_active_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.teacher_active_top_school_name ? res.account.teacher_active_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.teacher_active_top_school_major ? res.account.teacher_active_top_school_major : '';
                            _this.ruleForm.qualification_certificate = res.account.teacher_active_qualification_certificate ? res.account.teacher_active_qualification_certificate : '';
                            _this.ruleForm.qualification_certificate_no = res.account.teacher_active_qualification_certificate_no ? res.account.teacher_active_qualification_certificate_no : '';
                        } else if (res.account.role == '教师（离职）'){
                            _this.ruleForm.start_date = res.account.teacher_demission_start_date ? new Date(res.account.teacher_demission_start_date) : '';
                            _this.ruleForm.outschool = res.account.teacher_demission_demission_type ? res.account.teacher_demission_demission_type : '';
                            _this.ruleForm.outdate = res.account.teacher_demission_demission_date ? new Date(res.account.teacher_demission_demission_date) : '';
                            _this.ruleForm.stage = res.account.teacher_demission_stage ? res.account.teacher_demission_stage : '';
                            _this.ruleForm.course = res.account.teacher_demission_course ? res.account.teacher_demission_course : '';
                            _this.ruleForm.level = res.account.teacher_demission_level ? res.account.teacher_demission_level : '';
                            _this.ruleForm.plait = res.account.teacher_demission_plait ? res.account.teacher_demission_plait : '';
                            _this.ruleForm.qualification_certificate = res.account.teacher_demission_qualification_certificate ? res.account.teacher_demission_qualification_certificate : '';
                            _this.ruleForm.qualification_certificate_no = res.account.teacher_demission_qualification_certificate_no ? res.account.teacher_demission_qualification_certificate_no : '';
                            _this.ruleForm.hornor = res.account.teacher_demission_hornor ? res.account.teacher_demission_hornor : '';
                            _this.ruleForm.top_school_type = res.account.teacher_demission_top_school_type ? res.account.teacher_demission_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.teacher_demission_top_school_name ? res.account.teacher_demission_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.teacher_demission_top_school_major ? res.account.teacher_demission_top_school_major : '';
                        } else if (res.account.role == '职工（在职）'){
                            _this.ruleForm.entry = res.account.staff_active_start_date ? new Date(res.account.staff_active_start_date) : '';
                            _this.ruleForm.department = res.account.staff_active_department ? res.account.staff_active_department : '';
                            _this.ruleForm.position = res.account.staff_active_position ? res.account.staff_active_position : '';
                            _this.ruleForm.pre_company_name = res.account.staff_active_pre_company_name ? res.account.staff_active_pre_company_name : '';
                            _this.ruleForm.company_position = res.account.staff_active_pre_company_position ? res.account.staff_active_pre_company_position : '';
                            _this.ruleForm.company_office = res.account.staff_active_pre_company_office ? res.account.staff_active_pre_company_office : '';
                            _this.ruleForm.top_school_type = res.account.staff_active_top_school_type ? res.account.staff_active_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.staff_active_top_school_name ? res.account.staff_active_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.staff_active_top_school_major ? res.account.staff_active_top_school_major : '';
                        } else if (res.account.role == '职工（离职）'){
                            _this.ruleForm.entry = res.account.staff_demission_start_date ? new Date(res.account.staff_demission_start_date) : '';
                            _this.ruleForm.department = res.account.staff_demission_department ? res.account.staff_demission_department : '';
                            _this.ruleForm.position = res.account.staff_demission_position ? res.account.staff_demission_position : '';
                            _this.ruleForm.demission_type = res.account.staff_demission_demission_type ? res.account.staff_demission_demission_type : '';
                            _this.ruleForm.demission_date = res.account.staff_demission_demission_date ? new Date(res.account.staff_demission_demission_date) : '';
                            _this.ruleForm.top_school_type = res.account.staff_demission_top_school_type ? res.account.staff_demission_top_school_type : '';
                            _this.ruleForm.top_school_name = res.account.staff_demission_top_school_name ? res.account.staff_demission_top_school_name : '';
                            _this.ruleForm.top_school_major = res.account.staff_demission_top_school_major ? res.account.staff_demission_top_school_major : '';
                        }
                    }
                }
            );
        }
    }
})