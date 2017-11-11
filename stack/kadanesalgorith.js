function kadaneAlgorithm(arr){
    var m_e_h=0;
    var m_s_f=0;
    var start=0;
    var end=0;
    for(var i=0;i<arr.length;i++){
        m_e_h+=arr[i];
        if(m_e_h<0) {
            m_e_h=0;
            s=i+1;
        }else if(m_e_h>m_s_f){
            m_s_f=m_e_h;
            start=s;
            end=i;
        }
    }
    return m_s_f;
}
kadaneAlgorithm([-2, -3, 4, -1, -2, 1, 5, -3]);